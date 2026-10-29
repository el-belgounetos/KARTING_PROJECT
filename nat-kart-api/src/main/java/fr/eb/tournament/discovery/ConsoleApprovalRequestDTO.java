package fr.eb.tournament.discovery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Request DTO submitted by the tournament administrator to confirm
 * or customize a console type and discipline before connection.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsoleApprovalRequestDTO {
    private String stationName;
    private String confirmedConsoleType;
    private String confirmedDiscipline;
}
