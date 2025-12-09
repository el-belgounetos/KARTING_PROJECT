package fr.eb.tournament.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

/**
 * Score information for tournament planning.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScoreInfoDTO {
    private double score; // Total score (lower is better)
    private int collisions; // Number of repeated encounters
    private int maxRencontres; // Maximum encounters between any two players
    private Map<Integer, Integer> distribution; // Distribution: encounters count → number of pairs
}
