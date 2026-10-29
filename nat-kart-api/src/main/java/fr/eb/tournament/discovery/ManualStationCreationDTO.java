package fr.eb.tournament.discovery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

/**
 * Request payload for creating a manual / offline game station
 * (e.g. real console, arcade cab, or station without an automated client).
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ManualStationCreationDTO {
    private String stationName;           // e.g. "Poste 5 - Switch Salon"
    private String consoleType;           // e.g. "Switch", "N64 Originale", "Borne Arcade"
    private String discipline;            // "RACING", "VERSUS_FIGHTING", "SPORTS", "CUSTOM"
    private int numSlots;                 // default 4
    private Map<String, String> playerSlots;    // e.g. {"J1": "Alice", "J2": "Bob"}
    private Map<String, Long> playerSlotIds;    // e.g. {"J1": 1L, "J2": 2L}
}
