package fr.eb.tournament.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Parameters for tournament planning generation.
 * Not a persistent DTO, just input parameters for the algorithm.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TournamentRequest {
    private List<Long> playerIds; // IDs of participating players
    private List<ConsoleConfigDTO> consoles; // Console configurations

    // Optional algorithm parameters (with defaults)
    private Integer nbRelances = 3; // Number of restarts (default: 3)
    private Integer nbIterationsParRelance = 5000; // Iterations per restart (default: 5000)
    private Integer displayInterval = 500; // Display interval (default: 500)
    private Integer earlyStoppingThreshold = 1; // Stop if max encounters <= N (default: 1)
}
