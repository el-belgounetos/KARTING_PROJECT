package fr.eb.tournament.discovery;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
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
 * Service responsible for event-driven network discovery of consoles
 * and station lifecycle management (approval, rejection, disconnection).
 * SOLID (SRP): Focused strictly on station discovery and registry.
 * Zero magic numbers: all timeouts, buffer sizes, and ports externalized or constant.
 */
@Slf4j
@Service
public class ConsoleDiscoveryService {

    public static final int DEFAULT_UDP_BUFFER_SIZE = 4096;
    public static final int DEFAULT_STATION_PORT = 8080;
    public static final int UUID_SUBSTRING_LENGTH = 8;
    public static final String DEFAULT_MANUAL_CONSOLE_TYPE = "Console Manuelle";
    public static final String DEFAULT_MANUAL_STATION_PREFIX = "Poste ";
    public static final String DEFAULT_DISCIPLINE = "RACING";
    public static final String DEFAULT_OFFLINE_HOST = "offline";
    public static final int OFFLINE_PORT = 0;

    public static final String STATUS_DISCOVERED = "DISCOVERED";
    public static final String STATUS_MANUAL = "MANUAL";
    public static final String STATUS_APPROVED = "APPROVED";
    public static final String STATUS_REJECTED = "REJECTED";
    public static final String STATUS_DISCONNECTED = "DISCONNECTED";

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final MatchValidationService matchValidationService;

    @Value("${discovery.udp.port:45454}")
    private int udpPort;

    @Value("${discovery.udp.enabled:true}")
    private boolean udpEnabled;

    private final Map<String, DiscoveredConsoleDTO> consoleRegistry = new ConcurrentHashMap<>();
    private final AtomicBoolean running = new AtomicBoolean(false);
    private Thread udpListenerThread;
    private DatagramSocket udpSocket;

    public ConsoleDiscoveryService(MatchValidationService matchValidationService) {
        this.matchValidationService = matchValidationService;
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
        byte[] buffer = new byte[DEFAULT_UDP_BUFFER_SIZE];
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
            int port = data.containsKey("port") ? ((Number) data.get("port")).intValue() : DEFAULT_STATION_PORT;
            String host = (String) data.getOrDefault("host", fallbackIp);
            String consoleId = (String) data.getOrDefault("console_id", "UNKNOWN");
            String consoleName = (String) data.getOrDefault("console_name", consoleId);
            String gameTitle = (String) data.getOrDefault("game_title", "Unknown Game");
            String discipline = (String) data.getOrDefault("discipline", DEFAULT_DISCIPLINE);

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
                            .status(STATUS_DISCOVERED)
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
        String stationId = "manual-" + UUID.randomUUID().toString().substring(0, UUID_SUBSTRING_LENGTH);
        Instant now = Instant.now();
        int slots = dto.getNumSlots() > 0 ? dto.getNumSlots() : MatchValidationService.DEFAULT_SLOTS_COUNT;
        String discipline = dto.getDiscipline() != null ? dto.getDiscipline() : DEFAULT_DISCIPLINE;
        String consoleType = dto.getConsoleType() != null ? dto.getConsoleType() : DEFAULT_MANUAL_CONSOLE_TYPE;
        String stationName = dto.getStationName() != null ? dto.getStationName() : DEFAULT_MANUAL_STATION_PREFIX + consoleType;

        Map<String, String> playerSlots = dto.getPlayerSlots() != null ? new HashMap<>(dto.getPlayerSlots()) : new HashMap<>();
        Map<String, Long> playerSlotIds = dto.getPlayerSlotIds() != null ? new HashMap<>(dto.getPlayerSlotIds()) : new HashMap<>();

        DiscoveredConsoleDTO manualConsole = DiscoveredConsoleDTO.builder()
                .stationId(stationId)
                .stationName(stationName)
                .ipAddress(DEFAULT_OFFLINE_HOST)
                .port(OFFLINE_PORT)
                .detectedConsoleType(consoleType)
                .detectedGameTitle("Saisie Manuelle")
                .detectedDiscipline(discipline)
                .status(STATUS_MANUAL)
                .confirmedConsoleType(consoleType)
                .confirmedDiscipline(discipline)
                .playerSlots(playerSlots)
                .playerSlotIds(playerSlotIds)
                .firstSeen(now)
                .lastSeen(now)
                .latestTelemetry(Collections.emptyMap())
                .build();

        consoleRegistry.put(stationId, manualConsole);

        // Pre-create staged results ready for score entry using MatchValidationService (DRY)
        List<SlotResultDTO> initialSlots = matchValidationService.buildDefaultSlotResults(slots, playerSlots, playerSlotIds);
        matchValidationService.stageResults(stationId, MatchResultValidationDTO.builder()
                .stationId(stationId)
                .gameTitle("Session Manuelle")
                .stageOrTrack(MatchValidationService.DEFAULT_STAGE_TITLE)
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

        console.setStatus(STATUS_APPROVED);
        log.info("[DISCOVERY] Administrator approved console: {} as [{}] with player mapping: {}",
                stationId, console.getConfirmedConsoleType(), console.getPlayerSlots());
        return console;
    }

    public DiscoveredConsoleDTO rejectConsole(String stationId) {
        DiscoveredConsoleDTO console = consoleRegistry.get(stationId);
        if (console == null) {
            throw new NoSuchElementException("Console station not found: " + stationId);
        }
        console.setStatus(STATUS_REJECTED);
        log.info("[DISCOVERY] Administrator rejected console: {}", stationId);
        return console;
    }

    public DiscoveredConsoleDTO disconnectConsole(String stationId) {
        DiscoveredConsoleDTO console = consoleRegistry.get(stationId);
        if (console == null) {
            throw new NoSuchElementException("Console station not found: " + stationId);
        }
        console.setStatus(STATUS_DISCONNECTED);
        log.info("[DISCOVERY] Administrator disconnected console: {}", stationId);
        return console;
    }

    public MatchResultValidationDTO getStagedResults(String stationId) {
        DiscoveredConsoleDTO console = consoleRegistry.get(stationId);
        if (console == null) {
            throw new NoSuchElementException("Console station not found: " + stationId);
        }
        int slots = MatchValidationService.DEFAULT_SLOTS_COUNT;
        return matchValidationService.getOrCreateStagedResults(
                stationId,
                console.getDetectedGameTitle(),
                slots,
                console.getPlayerSlots(),
                console.getPlayerSlotIds()
        );
    }

    public void updateStagedResults(String stationId, MatchResultValidationDTO results) {
        matchValidationService.stageResults(stationId, results);
    }

    public DiscoveredConsoleDTO commitMatchResults(MatchResultValidationDTO validationDTO) {
        if (validationDTO == null) {
            throw new IllegalArgumentException("Validation results cannot be null");
        }
        DiscoveredConsoleDTO console = consoleRegistry.get(validationDTO.getStationId());
        matchValidationService.commitMatchResults(validationDTO);
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
            consoleDTO.setStatus(STATUS_DISCOVERED);
        }
        consoleRegistry.put(consoleDTO.getStationId(), consoleDTO);
    }
}
