package fr.eb.tournament.util.planning;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

/**
 * Result of planning scoring.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScoreResult {
    private double score; // Total score (lower is better)
    private Map<Integer, Integer> distribution; // Distribution of encounters: key=nb encounters, value=nb pairs
    private int collisions; // Number of repeated encounters
    private int maxRencontres; // Maximum encounters between any two players

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(
                String.format("Score: %.0f | Collisions: %d | Max rencontres: %d%n", score, collisions, maxRencontres));

        int total = distribution.values().stream().mapToInt(Integer::intValue).sum();

        // Group 5+ encounters together
        Map<String, Integer> display = new java.util.LinkedHashMap<>();
        for (int i = 0; i <= 4; i++) {
            display.put(String.valueOf(i), distribution.getOrDefault(i, 0));
        }

        int fivePlus = 0;
        for (Map.Entry<Integer, Integer> entry : distribution.entrySet()) {
            if (entry.getKey() >= 5) {
                fivePlus += entry.getValue();
            }
        }
        if (fivePlus > 0) {
            display.put("5+", fivePlus);
        }

        for (Map.Entry<String, Integer> entry : display.entrySet()) {
            if (entry.getValue() == 0)
                continue;

            double percent = (entry.getValue() * 100.0) / total;
            String label = entry.getKey().equals("5+") ? "5+ rencontres"
                    : (entry.getKey().equals("1") ? "1 rencontre" : entry.getKey() + " rencontres");
            sb.append(String.format("  ├─ %s : %d paires (%.1f%%)%n", label, entry.getValue(), percent));
        }

        return sb.toString();
    }
}
