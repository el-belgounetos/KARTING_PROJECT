package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.PlayerDTO;
import com.example.nat_kart_api.entity.PlayerEntity;
import com.example.nat_kart_api.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service responsible for player management (CRUD operations).
 * Coordinates with CharacterService for avatar pool and RankingService for
 * ranking entries.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class PlayerService {

    private final CharacterService characterService;
    private final RankingService rankingService;
    private final PlayerRepository playerRepository;

    /**
     * Converts PlayerEntity to PlayerDTO.
     */
    private PlayerDTO toDTO(PlayerEntity entity) {
        PlayerDTO dto = new PlayerDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setFirstname(entity.getFirstname());
        dto.setAge(entity.getAge());
        dto.setEmail(entity.getEmail());
        dto.setPseudo(entity.getPseudo());
        dto.setPicture(entity.getPicture());
        dto.setCategory(entity.getCategory());
        return dto;
    }

    /**
     * Converts PlayerDTO to PlayerEntity.
     */
    private PlayerEntity toEntity(PlayerDTO dto) {
        PlayerEntity entity = new PlayerEntity();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setFirstname(dto.getFirstname());
        entity.setAge(dto.getAge());
        entity.setEmail(dto.getEmail());
        entity.setPseudo(dto.getPseudo());
        entity.setPicture(dto.getPicture());
        entity.setCategory(dto.getCategory());
        return entity;
    }

    /**
     * Gets all players.
     *
     * @return List of all player DTOs
     */
    public List<PlayerDTO> getAllPlayers() {
        return playerRepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    /**
     * Creates a new player and corresponding ranking entry.
     *
     * @param player The player DTO to create
     */
    public void createPlayer(PlayerDTO player) {
        // Check for duplicates
        if (playerRepository.existsByPseudoIgnoreCase(player.getPseudo())) {
            return;
        }

        // Save to database (ID is auto-generated)
        PlayerEntity entity = toEntity(player);
        entity.setId(null); // Ensure ID is null for new entity
        PlayerEntity saved = playerRepository.save(entity);
        player.setId(saved.getId()); // Update DTO with generated ID

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
        log.debug("updatePlayer called for ID: {}, Category: {}", playerDTO.getId(), playerDTO.getCategory());

        Optional<PlayerEntity> optionalPlayer = playerRepository.findById(playerDTO.getId());
        if (optionalPlayer.isPresent()) {
            PlayerEntity player = optionalPlayer.get();
            log.debug("Found player to update: {}", player.getName());

            // Handle picture change
            String oldPicture = player.getPicture();
            String newPicture = playerDTO.getPicture();

            if (oldPicture != null && !oldPicture.equals(newPicture)) {
                // Release old picture back to pool
                log.debug("Releasing old picture: {}", oldPicture);
                this.characterService.introduceCaracter(oldPicture.replace(".png", ""));
            }

            if (newPicture != null && !newPicture.isEmpty() && !newPicture.equals(oldPicture)) {
                // Reserve new picture
                log.debug("Reserving new picture: {}", newPicture);
                this.characterService.removeCaracter(newPicture.replace(".png", ""));
            }

            // Update player fields
            player.setName(playerDTO.getName());
            player.setFirstname(playerDTO.getFirstname());
            player.setAge(playerDTO.getAge());
            player.setEmail(playerDTO.getEmail());
            player.setCategory(playerDTO.getCategory());
            player.setPicture(newPicture); // Update picture

            // Save updated entity to database
            playerRepository.save(player);

            // Update category in ranking using playerId
            boolean karterFoundCategory = rankingService.updateCategoryByPlayerId(
                    playerDTO.getId(),
                    playerDTO.getCategory());

            if (karterFoundCategory) {
                log.debug("Updated category in ranking for playerId {}", playerDTO.getId());
            } else {
                log.warn("Karter not found in ranking for playerId: {}", playerDTO.getId());
            }

            // Update picture in ranking using playerId
            if (newPicture != null && !newPicture.equals(oldPicture)) {
                boolean karterFoundPicture = rankingService.updatePictureByPlayerId(
                        playerDTO.getId(),
                        newPicture);

                if (karterFoundPicture) {
                    log.debug("Updated picture in ranking for playerId {}", playerDTO.getId());
                } else {
                    log.warn("Could not update picture in ranking for playerId: {}", playerDTO.getId());
                }
            }
        }
        log.debug("updatePlayer completed");
    }

    /**
     * Deletes a player and removes from rankings.
     *
     * @param pseudo The player's pseudo to delete
     */
    public void deletePlayer(String pseudo) {
        // Find player to get picture
        Optional<PlayerEntity> playerOpt = playerRepository.findByPseudo(pseudo);

        if (playerOpt.isPresent()) {
            PlayerEntity player = playerOpt.get();
            // Re-introduce picture to pool if it exists
            if (player.getPicture() != null && !player.getPicture().isEmpty()) {
                this.characterService.introduceCaracter(player.getPicture().replace(".png", ""));
            }
            // Delete from database
            playerRepository.delete(player);
        }

        this.rankingService.deleteRankingEntry(pseudo);
    }

    /**
     * Deletes all players and clears rankings.
     */
    public void deleteAllPlayers() {
        playerRepository.deleteAll();
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
        int startIdx = (int) playerRepository.count() + 1;

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

        List<PlayerEntity> players = playerRepository.findAll();
        for (PlayerEntity player : players) {
            if (player.getPicture() != null &&
                    (player.getPicture().equals(pictureWithPng) || player.getPicture().equals(pictureWithoutPng))) {
                log.debug("Removing picture {} from player {}", picture, player.getName());
                player.setPicture(null);
                playerRepository.save(player);
            }
        }
    }
}
