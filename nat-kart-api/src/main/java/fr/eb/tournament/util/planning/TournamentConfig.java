package fr.eb.tournament.util.planning;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Tournament configuration.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TournamentConfig {
    private int nbJoueurs; // Total number of players
    private int nbRelances; // Number of restarts to find best planning
    private int nbIterationsParRelance; // Iterations per restart
    private List<Console> consoles; // List of consoles
    private int displayInterval; // Display progress every N iterations
    private int earlyStoppingThreshold; // Stop if max encounters <= this value

    public int getNbSessions() {
        return consoles.size();
    }
}
