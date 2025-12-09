package fr.eb.tournament.service;

import fr.eb.tournament.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

/**
 * Example usage of TournamentService.
 * Shows how to generate a tournament planning from DTOs.
 */
@Slf4j
@RequiredArgsConstructor
public class TournamentServiceExample {

    public static void main(String[] args) {
        // Example: 16 players, 2 consoles

        // 1. Prepare player IDs
        List<Long> playerIds = List.of(1L, 2L, 3L, 4L, 5L, 6L, 7L, 8L,
                9L, 10L, 11L, 12L, 13L, 14L, 15L, 16L);

        // 2. Configure consoles
        List<ConsoleConfigDTO> consoles = List.of(
                new ConsoleConfigDTO(101L, 4), // Console ID 101, 4 players per game
                new ConsoleConfigDTO(102L, 4) // Console ID 102, 4 players per game
        );

        // 3. Create request
        TournamentRequest request = new TournamentRequest();
        request.setPlayerIds(playerIds);
        request.setConsoles(consoles);
        request.setNbRelances(3);
        request.setNbIterationsParRelance(5000);
        request.setDisplayInterval(500);
        request.setEarlyStoppingThreshold(1);

        // 4. Generate planning
        TournamentService service = new TournamentService();
        TournamentPlanningDTO planning = service.generatePlanning(request);

        // 5. Display result
        System.out.println("╔═══════════════════════════════════════════════════╗");
        System.out.println("║  TOURNAMENT PLANNING RESULT                        ║");
        System.out.println("╚═══════════════════════════════════════════════════╝\n");

        ScoreInfoDTO score = planning.getScoreInfo();
        System.out.printf("Score: %.0f | Collisions: %d | Max rencontres: %d%n",
                score.getScore(), score.getCollisions(), score.getMaxRencontres());

        for (TournamentPlanningDTO.SessionDTO session : planning.getSessions()) {
            System.out.println("\nSession " + session.getSessionNumber() + ":");

            for (TournamentPlanningDTO.ConsoleSessionDTO console : session.getConsoles()) {
                System.out.println("  Console ID " + console.getConsoleId() + ":");

                for (TournamentPlanningDTO.GroupeDTO groupe : console.getGroupes()) {
                    System.out.print("    Groupe " + groupe.getGroupeNumber() + ": ");
                    System.out.println("Players " + groupe.getPlayerIds());
                }
            }
        }

        System.out.println("\n✅ Planning generated successfully!");
        System.out.println("Frontend can now enrich player IDs with full PlayerDTO data.");
    }
}
