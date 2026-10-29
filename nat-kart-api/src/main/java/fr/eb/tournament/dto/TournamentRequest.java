package fr.eb.tournament.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Parameters for tournament planning generation.
 * Not a persistent DTO, just input parameters for the algorithm.
 * Zero magic numbers: default algorithm thresholds defined as public constants.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TournamentRequest {

    public static final int DEFAULT_NB_RELANCES = 3;
    public static final int DEFAULT_ITERATIONS_PAR_RELANCE = 5000;
    public static final int DEFAULT_DISPLAY_INTERVAL = 500;
    public static final int DEFAULT_EARLY_STOPPING_THRESHOLD = 1;

    private List<Long> playerIds; // IDs of participating players
    private List<ConsoleConfigDTO> consoles; // Console configurations

    // Optional algorithm parameters (with defaults)
    private Integer nbRelances = DEFAULT_NB_RELANCES;
    private Integer nbIterationsParRelance = DEFAULT_ITERATIONS_PAR_RELANCE;
    private Integer displayInterval = DEFAULT_DISPLAY_INTERVAL;
    private Integer earlyStoppingThreshold = DEFAULT_EARLY_STOPPING_THRESHOLD;
}
