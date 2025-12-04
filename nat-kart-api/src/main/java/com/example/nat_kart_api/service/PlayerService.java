package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.PlayerDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Service responsible for player management (CRUD operations).
 * Coordinates with CharacterService for avatar pool and RankingService for
 * ranking entries.
 */
@Service
public class PlayerService {

    private final CharacterService characterService;
    private final RankingService rankingService;

    private List<PlayerDTO> players = new ArrayList<>();
    private int id = 1;

    public PlayerService(CharacterService characterService, RankingService rankingService) {
        this.characterService = characterService;
        this.rankingService = rankingService;
    }

    /**
     * Gets all players.
     *
     * @return List of all player DTOs
     */
    public List<PlayerDTO> getAllPlayers() {
        return this.players;
    }

    /**
     * Creates a new player and corresponding ranking entry.
     *
     * @param player The player DTO to create
     */
    public void createPlayer(PlayerDTO player) {
        // Check for duplicates
        boolean exists = this.players.stream()
                .anyMatch(p -> p.getPseudo().equalsIgnoreCase(player.getPseudo()));
        if (exists) {
            return;
        }

        // Auto-assign ID
        player.setId((long) id++);

        this.players.add(player);

        // Remove picture from pool if selected
        if (player.getPicture() != null && !player.getPicture().isEmpty()) {
            this.characterService.removeCaracter(player.getPicture().replace(".png", ""));
        }

        // Create ranking entry
        String displayName = (player.getPseudo() != null && !player.getPseudo().isEmpty())
                ? player.getPseudo()
                : player.getName();

        rankingService.createRankingEntry(
                player.getId(),
                displayName,
                player.getPicture(),
                player.getCategory());
    }

    /**
     * Updates an existing player and syncs category to ranking.
     *
     * @param playerDTO The player DTO with updated information
     */
    public void updatePlayer(PlayerDTO playerDTO) {
        System.out.println(
                "[DEBUG] updatePlayer called for ID: " + playerDTO.getId() + ", Category: " + playerDTO.getCategory());

        for (PlayerDTO player : this.players) {
            if (player.getId().equals(playerDTO.getId())) {
                System.out.println("[DEBUG] Found player to update: " + player.getName());

                // Handle picture change
                String oldPicture = player.getPicture();
                String newPicture = playerDTO.getPicture();

                if (oldPicture != null && !oldPicture.equals(newPicture)) {
                    // Release old picture back to pool
                    System.out.println("[DEBUG] Releasing old picture: " + oldPicture);
                    this.characterService.introduceCaracter(oldPicture.replace(".png", ""));
                }

                if (newPicture != null && !newPicture.isEmpty() && !newPicture.equals(oldPicture)) {
                    // Reserve new picture
                    System.out.println("[DEBUG] Reserving new picture: " + newPicture);
                    this.characterService.removeCaracter(newPicture.replace(".png", ""));
                }

                // Update player fields
                player.setName(playerDTO.getName());
                player.setFirstname(playerDTO.getFirstname());
                player.setAge(playerDTO.getAge());
                player.setEmail(playerDTO.getEmail());
                player.setCategory(playerDTO.getCategory());
                player.setPicture(newPicture); // Update picture

                // Update category in ranking using playerId
                boolean karterFoundCategory = rankingService.updateCategoryByPlayerId(
                        playerDTO.getId(),
                        playerDTO.getCategory());

                if (karterFoundCategory) {
                    System.out.println("[DEBUG] Updated category in ranking for playerId " + playerDTO.getId());
                } else {
                    System.out
                            .println("[DEBUG] WARNING: Karter not found in ranking for playerId: " + playerDTO.getId());
                }

                // Update picture in ranking using playerId
                if (newPicture != null && !newPicture.equals(oldPicture)) {
                    boolean karterFoundPicture = rankingService.updatePictureByPlayerId(
                            playerDTO.getId(),
                            newPicture);

                    if (karterFoundPicture) {
                        System.out.println("[DEBUG] Updated picture in ranking for playerId " + playerDTO.getId());
                    } else {
                        System.out.println("[DEBUG] WARNING: Could not update picture in ranking for playerId: "
                                + playerDTO.getId());
                    }
                }
                break;
            }
        }
        System.out.println("[DEBUG] updatePlayer completed");
    }

    /**
     * Deletes a player and removes from rankings.
     *
     * @param pseudo The player's pseudo to delete
     */
    public void deletePlayer(String pseudo) {
        // Find player to get picture
        Optional<PlayerDTO> playerOpt = this.players.stream()
                .filter(p -> p.getPseudo().equals(pseudo))
                .findFirst();

        if (playerOpt.isPresent()) {
            PlayerDTO player = playerOpt.get();
            // Re-introduce picture to pool if it exists
            if (player.getPicture() != null && !player.getPicture().isEmpty()) {
                this.characterService.introduceCaracter(player.getPicture().replace(".png", ""));
            }
        }

        this.players.removeIf(p -> p.getPseudo().equals(pseudo));
        this.rankingService.deleteRankingEntry(pseudo);
    }

    /**
     * Deletes all players and clears rankings.
     */
    public void deleteAllPlayers() {
        this.players.clear();
        this.rankingService.clearRanking();
        this.characterService.resetExcludeList();
    }

    /**
     * Generates test players with optional avatar assignment.
     *
     * @param count       Number of players to generate
     * @param assignImage Whether to assign avatars automatically
     */
    public void generatePlayers(int count, boolean assignImage) {
        int startIdx = this.players.size() + 1;

        for (int i = 0; i < count; i++) {
            int currentIdx = startIdx + i;
            PlayerDTO player = new PlayerDTO();
            player.setName("Player_" + currentIdx);
            player.setFirstname("Test");
            player.setAge(20 + currentIdx);
            player.setEmail("player" + currentIdx + "@test.com");
            player.setPseudo("Player_" + currentIdx);
            player.setCategory("");

            if (assignImage) {
                List<String> available = this.characterService.getAllCaracters();
                if (!available.isEmpty()) {
                    player.setPicture(available.get(0));
                }
            }

            this.createPlayer(player);
        }
    }

    /**
     * Removes a specific picture from all players who are using it.
     * Used when an avatar is excluded from the champion wheel.
     *
     * @param picture The picture filename to remove (with or without .png)
     */
    public void removePictureFromPlayers(String picture) {
        String pictureWithPng = picture.endsWith(".png") ? picture : picture + ".png";
        String pictureWithoutPng = picture.replace(".png", "");

        for (PlayerDTO player : this.players) {
            if (player.getPicture() != null &&
                    (player.getPicture().equals(pictureWithPng) || player.getPicture().equals(pictureWithoutPng))) {
                System.out.println("[DEBUG] Removing picture " + picture + " from player " + player.getName());
                player.setPicture(null);
            }
        }
    }
}
