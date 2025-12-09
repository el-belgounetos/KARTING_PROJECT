package fr.eb.tournament.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Configuration for a console in the tournament.
 * Links to existing ConsoleDTO by ID + adds tournament-specific config.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConsoleConfigDTO {
    private Long consoleId; // ID of the console (links to ConsoleDTO)
    private int joueursParPartie; // Players per game (3 or 4)

    // Note: nbGroupes = nbConsoles (derived, not stored)
    // Note: couleur from ConsoleDTO (for display only)
}
