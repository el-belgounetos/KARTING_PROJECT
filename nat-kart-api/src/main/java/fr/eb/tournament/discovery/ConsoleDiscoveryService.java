package fr.eb.tournament.discovery;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.service.RankingService;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * Service responsible for event-driven network discovery of consoles,
 * manual station registration for offline hardware, player-to-controller mapping,
 * and post-session score validation/adjustment before awarding points.
 */
@Slf4j
@Service
public class ConsoleDiscoveryService {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final RankingService rankingService;
    private final PlayerRepository playerRepository;

    @Value("${discovery.udp.port:45454}")
    private int udpPort;

    @Value("${discovery.udp.enabled:true}")
    private boolean udpEnabled;

    private final Map<String, DiscoveredConsoleDTO> consoleRegistry = new ConcurrentHashMap<>();
    private final Map<String, MatchResultValidationDTO> stagedResults = new ConcurrentHashMap<>();
    private final AtomicBoolean running = new AtomicBoolean(false);
    private Thread udpListenerThread;
    private DatagramSocket udpSocket;

    public ConsoleDiscoveryService(
            @Lazy RankingService rankingService,
            @Lazy PlayerRepository playerRepository) {
        this.rankingService = rankingService;
        this.playerRepository = playerRepository;
    }

    @PostConstruct
    public void startListener() {
        if (!udpEnabled) {
            log.info("[DISCOVERY] UDP network discovery listener disabled by configuration");
            return;
        }

        running.set(true);
        udpListenerThread = new Thread(this::listenUdpBeacons, "ConsoleDiscovery-UDP");
        udpListenerThread.setDaemon(true);
        udpListenerThread.start();
        log.info("[DISCOVERY] Listening for console discovery beacons on UDP port {}", udpPort);
    }

    @PreDestroy
    public void stopListener() {
        running.set(false);
        if (udpSocket != null && !udpSocket.isClosed()) {
            udpSocket.close();
        }
        if (udpListenerThread != null) {
            udpListenerThread.interrupt();
        }
        log.info("[DISCOVERY] Discovery service stopped");
    }

    private void listenUdpBeacons() {
        byte[] buffer = new byte[4096];
        try {
            udpSocket = new DatagramSocket(null);
            udpSocket.setReuseAddress(true);
            udpSocket.bind(new InetSocketAddress(udpPort));

            while (running.get() && !Thread.currentThread().isInterrupted()) {
                DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
                udpSocket.receive(packet);

                String payload = new String(packet.getData(), packet.getOffset(), packet.getLength(), StandardCharsets.UTF_8);
                String sourceIp = packet.getAddress().getHostAddress();

                processBeaconPayload(payload, sourceIp);
            }
        } catch (Exception e) {
            if (running.get()) {
                log.warn("[DISCOVERY] UDP discovery socket error: {}", e.getMessage());
            }
        }
    }

    public void processBeaconPayload(String payload, String fallbackIp) {
        try {
            Map<String, Object> data = objectMapper.readValue(payload, new TypeReference<>() {});
            String stationId = (String) data.getOrDefault("station_id", "station-" + fallbackIp);
            int port = data.containsKey("port") ? ((Number) data.get("port")).intValue() : 8080;
            String host = (String) data.getOrDefault("host", fallbackIp);
            String consoleId = (String) data.getOrDefault("console_id", "UNKNOWN");
            String consoleName = (String) data.getOrDefault("console_name", consoleId);
            String gameTitle = (String) data.getOrDefault("game_title", "Unknown Game");
            String discipline = (String) data.getOrDefault("discipline", "RACING");

            Instant now = Instant.now();

            consoleRegistry.compute(stationId, (id, existing) -> {
                if (existing == null) {
                    log.info("[DISCOVERY] Discovered new console: {} ({} - {}) at {}:{}", stationId, consoleName, gameTitle, host, port);
                    return DiscoveredConsoleDTO.builder()
                            .stationId(stationId)
                            .stationName(stationId)
                            .ipAddress(host)
                            .port(port)
                            .detectedConsoleType(consoleName)
                            .detectedGameTitle(gameTitle)
                            .detectedDiscipline(discipline)
                            .status("DISCOVERED")
                            .confirmedConsoleType(consoleName)
                            .confirmedDiscipline(discipline)
                            .playerSlots(new HashMap<>())
                            .playerSlotIds(new HashMap<>())
                            .firstSeen(now)
                            .lastSeen(now)
                            .latestTelemetry(Collections.emptyMap())
                            .build();
                } else {
                    existing.setLastSeen(now);
                    existing.setDetectedConsoleType(consoleName);
                    existing.setDetectedGameTitle(gameTitle);
                    return existing;
                }
            });
        } catch (Exception e) {
            log.debug("[DISCOVERY] Invalid beacon received: {}", e.getMessage());
        }
    }

    public List<DiscoveredConsoleDTO> getAllDiscoveredConsoles() {
        return new ArrayList<>(consoleRegistry.values());
    }

    public Optional<DiscoveredConsoleDTO> getConsoleById(String stationId) {
        return Optional.ofNullable(consoleRegistry.get(stationId));
    }

    public DiscoveredConsoleDTO createManualStation(ManualStationCreationDTO dto) {
        String stationId = "manual-" + UUID.randomUUID().toString().substring(0, 8);
        Instant now = Instant.now();
        int slots = dto.getNumSlots() > 0 ? dto.getNumSlots() : 4;
        String discipline = dto.getDiscipline() != null ? dto.getDiscipline() : "RACING";
        String consoleType = dto.getConsoleType() != null ? dto.getConsoleType() : "Console Manuelle";
        String stationName = dto.getStationName() != null ? dto.getStationName() : "Poste " + consoleType;

        Map<String, String> playerSlots = dto.getPlayerSlots() != null ? new HashMap<>(dto.getPlayerSlots()) : new HashMap<>();
        Map<String, Long> playerSlotIds = dto.getPlayerSlotIds() != null ? new HashMap<>(dto.getPlayerSlotIds()) : new HashMap<>();

        DiscoveredConsoleDTO manualConsole = DiscoveredConsoleDTO.builder()
                .stationId(stationId)
                .stationName(stationName)
                .ipAddress("offline")
                .port(0)
                .detectedConsoleType(consoleType)
                .detectedGameTitle("Saisie Manuelle")
                .detectedDiscipline(discipline)
                .status("MANUAL")
                .confirmedConsoleType(consoleType)
                .confirmedDiscipline(discipline)
                .playerSlots(playerSlots)
                .playerSlotIds(playerSlotIds)
                .firstSeen(now)
                .lastSeen(now)
                .latestTelemetry(Collections.emptyMap())
                .build();

        consoleRegistry.put(stationId, manualConsole);

        // Pre-create staged results ready for score entry
        List<SlotResultDTO> initialSlots = new ArrayList<>();
        int[] defaultPoints = {15, 12, 10, 8, 7, 6, 5, 4};
        for (int i = 0; i < slots; i++) {
            String slotKey = "J" + (i + 1);
            String name = playerSlots.getOrDefault(slotKey, "Joueur " + (i + 1));
            Long pId = playerSlotIds.get(slotKey);
            int rank = i + 1;
            int points = (i < defaultPoints.length) ? defaultPoints[i] : 0;
            initialSlots.add(SlotResultDTO.builder()
                    .slotId(slotKey)
                    .characterName("Manuel")
                    .playerName(name)
                    .playerId(pId)
                    .rank(rank)
                    .pointsAwarded(points)
                    .victory(rank == 1)
                    .build());
        }

        stagedResults.put(stationId, MatchResultValidationDTO.builder()
                .stationId(stationId)
                .gameTitle("Session Manuelle")
                .stageOrTrack("Session de Tournoi")
                .results(initialSlots)
                .build());

        log.info("[MANUAL] Created manual game station: {} [{}] with {} slots", stationName, consoleType, slots);
        return manualConsole;
    }

    public DiscoveredConsoleDTO approveConsole(String stationId, ConsoleApprovalRequestDTO request) {
        DiscoveredConsoleDTO console = consoleRegistry.get(stationId);
        if (console == null) {
            throw new NoSuchElementException("Console station not found: " + stationId);
        }

        if (request.getStationName() != null && !request.getStationName().isBlank()) {
            console.setStationName(request.getStationName());
        }
        if (request.getConfirmedConsoleType() != null && !request.getConfirmedConsoleType().isBlank()) {
            console.setConfirmedConsoleType(request.getConfirmedConsoleType());
        }
        if (request.getConfirmedDiscipline() != null && !request.getConfirmedDiscipline().isBlank()) {
            console.setConfirmedDiscipline(request.getConfirmedDiscipline());
        }
        if (request.getPlayerSlots() != null) {
            console.setPlayerSlots(request.getPlayerSlots());
        }
        if (request.getPlayerSlotIds() != null) {
            console.setPlayerSlotIds(request.getPlayerSlotIds());
        }

        console.setStatus("APPROVED");
        log.info("[DISCOVERY] Administrator approved console: {} as [{}] with player mapping: {}",
                stationId, console.getConfirmedConsoleType(), console.getPlayerSlots());
        return console;
    }

    public DiscoveredConsoleDTO rejectConsole(String stationId) {
        DiscoveredConsoleDTO console = consoleRegistry.get(stationId);
        if (console == null) {
            throw new NoSuchElementException("Console station not found: " + stationId);
        }
        console.setStatus("REJECTED");
        log.info("[DISCOVERY] Administrator rejected console: {}", stationId);
        return console;
    }

    public DiscoveredConsoleDTO disconnectConsole(String stationId) {
        DiscoveredConsoleDTO console = consoleRegistry.get(stationId);
        if (console == null) {
            throw new NoSuchElementException("Console station not found: " + stationId);
        }
        console.setStatus("DISCONNECTED");
        log.info("[DISCOVERY] Administrator disconnected console: {}", stationId);
        return console;
    }

    public MatchResultValidationDTO getStagedResults(String stationId) {
        DiscoveredConsoleDTO console = consoleRegistry.get(stationId);
        if (console == null) {
            throw new NoSuchElementException("Console station not found: " + stationId);
        }

        return stagedResults.computeIfAbsent(stationId, id -> {
            List<SlotResultDTO> slots = new ArrayList<>();
            Map<String, String> playerSlots = console.getPlayerSlots() != null ? console.getPlayerSlots() : Map.of();
            Map<String, Long> playerSlotIds = console.getPlayerSlotIds() != null ? console.getPlayerSlotIds() : Map.of();

            int defaultSlots = 4;
            int[] defaultPoints = {15, 12, 10, 8};

            for (int i = 0; i < defaultSlots; i++) {
                String slotKey = "J" + (i + 1);
                String assignedName = playerSlots.getOrDefault(slotKey, "Joueur " + (i + 1));
                Long assignedId = playerSlotIds.get(slotKey);
                int rank = i + 1;
                int points = (i < defaultPoints.length) ? defaultPoints[i] : 0;
                boolean isVictory = (rank == 1);

                slots.add(SlotResultDTO.builder()
                        .slotId(slotKey)
                        .characterName("Inconnu")
                        .playerName(assignedName)
                        .playerId(assignedId)
                        .rank(rank)
                        .pointsAwarded(points)
                        .victory(isVictory)
                        .build());
            }

            return MatchResultValidationDTO.builder()
                    .stationId(stationId)
                    .gameTitle(console.getDetectedGameTitle())
                    .stageOrTrack("Session de Tournoi")
                    .results(slots)
                    .build();
        });
    }

    public void updateStagedResults(String stationId, MatchResultValidationDTO results) {
        stagedResults.put(stationId, results);
    }

    public DiscoveredConsoleDTO commitMatchResults(MatchResultValidationDTO validationDTO) {
        if (validationDTO == null || validationDTO.getResults() == null) {
            throw new IllegalArgumentException("Validation results cannot be null");
        }
        DiscoveredConsoleDTO console = consoleRegistry.get(validationDTO.getStationId());

        for (SlotResultDTO slot : validationDTO.getResults()) {
            if (slot.getPlayerId() != null) {
                rankingService.addPointsToPlayer(slot.getPlayerId(), slot.getPointsAwarded(), slot.isVictory());
            } else if (slot.getPlayerName() != null && !slot.getPlayerName().isBlank()) {
                playerRepository.findByPseudo(slot.getPlayerName()).ifPresent(player -> {
                    rankingService.addPointsToPlayer(player.getId(), slot.getPointsAwarded(), slot.isVictory());
                });
            }
        }
        stagedResults.remove(validationDTO.getStationId());
        log.info("[EVENT] Validated and awarded tournament points for station: {}", validationDTO.getStationId());
        return console;
    }

    public void registerManual(DiscoveredConsoleDTO consoleDTO) {
        if (consoleDTO.getStationId() == null || consoleDTO.getStationId().isBlank()) {
            consoleDTO.setStationId("station-" + System.currentTimeMillis());
        }
        Instant now = Instant.now();
        consoleDTO.setFirstSeen(now);
        consoleDTO.setLastSeen(now);
        if (consoleDTO.getStatus() == null) {
            consoleDTO.setStatus("DISCOVERED");
        }
        consoleRegistry.put(consoleDTO.getStationId(), consoleDTO);
    }
}
