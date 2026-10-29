package fr.eb.tournament.discovery;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
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
 * Service responsible for event-driven network discovery of consoles.
 * Listens on a UDP port for broadcast beacons from GMK3 or other game agents,
 * maintains discovery states, and provides administrator approval workflows.
 */
@Slf4j
@Service
public class ConsoleDiscoveryService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${discovery.udp.port:45454}")
    private int udpPort;

    @Value("${discovery.udp.enabled:true}")
    private boolean udpEnabled;

    private final Map<String, DiscoveredConsoleDTO> consoleRegistry = new ConcurrentHashMap<>();
    private final AtomicBoolean running = new AtomicBoolean(false);
    private Thread udpListenerThread;
    private DatagramSocket udpSocket;

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

        console.setStatus("APPROVED");
        log.info("[DISCOVERY] Administrator approved console: {} as [{}] (Discipline: {})",
                stationId, console.getConfirmedConsoleType(), console.getConfirmedDiscipline());
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
