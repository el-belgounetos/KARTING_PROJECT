package fr.eb.tournament.service;

import fr.eb.tournament.dto.PlayerDTO;
import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.mapper.PlayerMapper;

import org.springframework.lang.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    private final HistoryService historyService;
    private final PlayerRepository playerRepository;
    private final PlayerMapper playerMapper;
    @org.springframework.beans.factory.annotation.Autowired
    private fr.eb.tournament.repository.TeamRepository teamRepository;

    /**
     * Converts PlayerEntity to PlayerDTO using PlayerMapper.
     */
    private PlayerDTO toDTO(PlayerEntity entity) {
        return playerMapper.toDTO(entity);
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
        if (dto.getTeamId() != null) {
            entity.setTeam(teamRepository.findById(dto.getTeamId()).orElse(null));
        }
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
                .toList();
    }

    /**
     * Creates a new player and corresponding ranking entry.
     *
     * @param player The player DTO to create
     */
    @SuppressWarnings("null")
    public void createPlayer(@NonNull PlayerDTO player) {
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

        // Create ranking entry - player data will be accessed via JPA relationship
        rankingService.createRankingEntry(saved.getId());
    }

    /**
     * Updates an existing player.
     * Player changes are automatically reflected in rankings via JPA relationship.
     *
     * @param playerDTO The player DTO with updated information
     */
    public void updatePlayer(@NonNull PlayerDTO playerDTO) {
        log.debug("updatePlayer called for ID: {}, Category: {}", playerDTO.getId(), playerDTO.getCategory());

        if (playerDTO.getId() == null) {
            log.error("Cannot update player with null ID");
            return;
        }

        @SuppressWarnings("null")
        Optional<PlayerEntity> optionalPlayer = this.playerRepository.findById(playerDTO.getId());
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
            player.setPicture(newPicture);

            if (playerDTO.getTeamId() != null) {
                player.setTeam(teamRepository.findById(playerDTO.getTeamId()).orElse(null));
            } else {
                player.setTeam(null);
            }

            // Save updated entity to database
            playerRepository.save(player);

            // No need to manually sync to ranking - JPA relationship handles it
            // automatically
            log.debug("Player updated - changes automatically reflected in ranking via JPA");
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

            // Delete ranking first to avoid foreign key constraint violation
            // We do this before deleting the player because RankingEntity has a foreign key
            // to PlayerEntity
            try {
                this.rankingService.deleteRankingEntry(pseudo);
            } catch (Exception e) {
                log.warn("Could not delete ranking for player {}: {}", pseudo, e.getMessage());
            }

            // Re-introduce picture to pool if it exists
            if (player.getPicture() != null && !player.getPicture().isEmpty()) {
                this.characterService.introduceCaracter(player.getPicture().replace(".png", ""));
            }
            // Delete history first to avoid foreign key constraint violation
            this.historyService.deleteHistoryByPlayer(player);

            // Delete from database
            playerRepository.delete(player);
        } else {
            // If player not found, try to delete ranking anyway (cleanup)
            try {
                this.rankingService.deleteRankingEntry(pseudo);
            } catch (Exception e) {
                // Ignore if not found
            }
        }
    }

    /**
     * Deletes all players and clears rankings.
     */
    public void deleteAllPlayers() {
        // IMPORTANT: Delete rankings and history FIRST to avoid foreign key constraint
        // violation
        this.rankingService.clearRanking();
        this.historyService.deleteAllHistory();
        playerRepository.deleteAll();
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

    /**
     * Get player statistics.
     * 
     * @return PlayerStatsDTO
     */
    public fr.eb.tournament.dto.PlayerStatsDTO getPlayerStats() {
        long total = playerRepository.count();
        long withAvatar = playerRepository.countByPictureIsNotNullAndPictureNot("");
        return new fr.eb.tournament.dto.PlayerStatsDTO(total, withAvatar, total - withAvatar);
    }
}
