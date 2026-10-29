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
    private Instant firstSeen;
    private Instant lastSeen;
    private Map<String, Object> latestTelemetry;
}
