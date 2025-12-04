package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.KarterDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service responsible for managing player rankings, points, and victories.
 * Handles automatic re-ranking after point updates.
 */
@Service
public class RankingService {

    private List<KarterDTO> ranks = new ArrayList<>();

    /**
     * Gets all player rankings.
     *
     * @return List of karter DTOs with ranking information
     */
    public List<KarterDTO> getAllRanks() {
        return this.ranks;
    }

    /**
     * Updates points and victories for a player by name.
     * Also synchronizes category from player data.
     *
     * @param name      The player name
     * @param newPoints The new points total
     * @param victory   The new victory count
     * @param category  The player's category
     */
    public void updatePointsByName(String name, int newPoints, int victory, String category) {
        for (KarterDTO karter : ranks) {
            if (karter.getName().equals(name)) {
                karter.setPoints(newPoints);
                karter.setVictory(victory);
                karter.setCategory(category);
                this.rerankEveryone();
                return;
            }
        }
    }

    /**
     * Creates a new ranking entry for a player.
     *
     * @param playerId Player's unique ID
     * @param name     Player's display name (pseudo)
     * @param picture  Player's avatar filename
     * @param category Player's category
     */
    public void createRankingEntry(Long playerId, String name, String picture, String category) {
        KarterDTO newKarter = new KarterDTO();
        newKarter.setPlayerId(playerId);
        newKarter.setName(name);
        newKarter.setPicture(picture);
        newKarter.setCategory(category);
        newKarter.setPoints(0);
        newKarter.setVictory(0);

        this.ranks.add(newKarter);
        this.rerankEveryone();
    }

    /**
     * Deletes a ranking entry by player name.
     *
     * @param name The player name to remove from rankings
     */
    public void deleteRankingEntry(String name) {
        this.ranks.removeIf(k -> k.getName().equals(name));
        this.rerankEveryone();
    }

    /**
     * Clears all ranking entries.
     */
    public void clearRanking() {
        this.ranks.clear();
    }

    /**
     * Updates the category for a player by their ID.
     *
     * @param playerId    The player's ID
     * @param newCategory The new category value
     * @return true if player was found and updated, false otherwise
     */
    public boolean updateCategoryByPlayerId(Long playerId, String newCategory) {
        for (KarterDTO karter : ranks) {
            if (karter.getPlayerId() != null && karter.getPlayerId().equals(playerId)) {
                karter.setCategory(newCategory);
                return true;
            }
        }
        return false;
    }

    /**
     * Updates the picture (avatar) for a player by their ID.
     *
     * @param playerId   The player's ID
     * @param newPicture The new picture filename
     * @return true if player was found and updated, false otherwise
     */
    public boolean updatePictureByPlayerId(Long playerId, String newPicture) {
        for (KarterDTO karter : ranks) {
            if (karter.getPlayerId() != null && karter.getPlayerId().equals(playerId)) {
                System.out.println("[DEBUG] Updating picture in ranking for playerId " + playerId + " from '"
                        + karter.getPicture() + "' to '" + newPicture + "'");
                karter.setPicture(newPicture);
                return true;
            }
        }
        return false;
    }

    /**
     * Re-ranks all players based on their points (descending order).
     * Assigns rank numbers (1st, 2nd, 3rd, etc.).
     */
    private void rerankEveryone() {
        ranks.sort((karter1, karter2) -> Integer.compare(karter2.getPoints(), karter1.getPoints()));

        for (int i = 0; i < ranks.size(); i++) {
            ranks.get(i).setRank(i + 1);
        }
    }
}
