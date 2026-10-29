package fr.eb.tournament.discovery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Result details for a specific controller slot (J1, J2, J3, J4...).
 * Allows the tournament administrator to verify who held which controller
 * and played which character before awarding points.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SlotResultDTO {
    private String slotId;          // e.g. "J1", "J2", "J3", "J4"
    private String characterName;   // e.g. "Mario", "Bowser", "Ryu", "Fox"
    private Long playerId;          // Registered tournament player ID
    private String playerName;      // Tournament player pseudo/name
    private int rank;               // 1 for 1st, 2 for 2nd...
    private int pointsAwarded;      // Points calculated for this finish
    private boolean victory;        // True if winner of the round/race
}
