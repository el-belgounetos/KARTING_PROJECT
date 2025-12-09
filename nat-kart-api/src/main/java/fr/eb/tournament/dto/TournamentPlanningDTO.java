package fr.eb.tournament.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Result of tournament planning generation.
 * Contains sessions with player IDs only (no full player data).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TournamentPlanningDTO {
    private List<SessionDTO> sessions; // Planning by session
    private ScoreInfoDTO scoreInfo; // Score information

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SessionDTO {
        private int sessionNumber; // 1, 2, 3...
        private List<ConsoleSessionDTO> consoles; // Planning by console
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ConsoleSessionDTO {
        private Long consoleId; // Console ID (links to ConsoleDTO)
        private List<GroupeDTO> groupes; // Groups for this console
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class GroupeDTO {
        private int groupeNumber; // 1, 2, 3...
        private List<Long> playerIds; // Player IDs in this group
    }
}
