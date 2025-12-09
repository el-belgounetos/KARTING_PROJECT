package fr.eb.tournament.util.planning;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a gaming console (Switch, etc.) with its configuration.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Console {
    private String nom; // "Switch 1", "Switch 2"
    private int joueursParPartie; // 3 or 4 players per game
    private int nbGroupes; // Number of groups (2, 3, etc.)
    private String couleur; // Color for display (optional)

    public Console(String nom, int joueursParPartie, int nbGroupes) {
        this.nom = nom;
        this.joueursParPartie = joueursParPartie;
        this.nbGroupes = nbGroupes;
        this.couleur = "Gray"; // Default color
    }
}
