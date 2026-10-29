package fr.eb.tournament.discovery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

/**
 * Request DTO submitted by the tournament administrator to confirm
 * or customize a console type, discipline, and player slot mappings before connection.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsoleApprovalRequestDTO {
    private String stationName;
    private String confirmedConsoleType;
    private String confirmedDiscipline;
    private Map<String, String> playerSlots;    // e.g. {"J1": "Benjamin", "J2": "Nicolas"}
    private Map<String, Long> playerSlotIds;    // e.g. {"J1": 1L, "J2": 2L}
}
