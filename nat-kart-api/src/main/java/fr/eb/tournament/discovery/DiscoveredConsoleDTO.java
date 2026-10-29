package fr.eb.tournament.discovery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Map;

/**
 * Representation of a game station / console discovered on the local network.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DiscoveredConsoleDTO {
    private String stationId;
    private String stationName;
    private String ipAddress;
    private int port;
    private String detectedConsoleType;
    private String detectedGameTitle;
    private String detectedDiscipline;
    private String status; // DISCOVERED, APPROVED, REJECTED, CONNECTED, DISCONNECTED
    private String confirmedConsoleType;
    private String confirmedDiscipline;
    private Map<String, String> playerSlots;    // e.g. {"J1": "Benjamin", "J2": "Nicolas"}
    private Map<String, Long> playerSlotIds;    // e.g. {"J1": 1L, "J2": 2L}
    private Instant firstSeen;
    private Instant lastSeen;
    private Map<String, Object> latestTelemetry;
}
