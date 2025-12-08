package fr.eb.tournament.service;

import fr.eb.tournament.dto.HistoryDTO;
import fr.eb.tournament.entity.HistoryEntity;
import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.repository.HistoryRepository;
import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.exception.ResourceNotFoundException;
import fr.eb.tournament.mapper.HistoryMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service responsible for managing game history (History).
 * Handles storage and retrieval of player game sessions using database
 * persistence.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final PlayerRepository playerRepository;
    private final RankingService rankingService;
    private final HistoryMapper historyMapper;

    /**
     * Gets all history entries.
     *
     * @return List of all History DTOs
     */
    public List<HistoryDTO> getPlayerHistory() {
        return historyRepository.findAll().stream()
                .map(historyMapper::toDTO)
                .toList();
    }

    /**
     * Gets history entries for a specific player.
     *
     * @param playerName The player's name
     * @return List of History DTOs for the specified player
     */
    public List<HistoryDTO> getPlayerHistoryByPlayerName(String playerName) {
        log.debug("Getting history for player: {}", playerName);

        if (playerName == null || playerName.trim().isEmpty()) {
            return List.of();
        }

        // Optimized: Uses database query instead of in-memory filtering
        List<HistoryDTO> result = historyRepository.findByPlayer_NameContainingIgnoreCase(playerName)
                .stream()
                .map(historyMapper::toDTO)
                .toList();

        log.debug("Found {} entries for {}", result.size(), playerName);
        return result;
    }

    /**
     * Adds a new history entry.
     *
     * @param HistoryDTO The history entry to add
     */
    @Transactional
    @SuppressWarnings("null")
    public void updatePlayerHistory(HistoryDTO historyDTO) {
        log.debug("Saving history entry for player: {}",
                historyDTO.getPlayer() != null ? historyDTO.getPlayer().getName() : "NULL");

        HistoryEntity entity = toEntity(historyDTO);
        HistoryEntity saved = historyRepository.save(entity);

        log.debug("Saved history entry with ID: {}", saved.getId());
        log.debug("Total history entries: {}", historyRepository.count());
    }

    /**
     * Deletes a history entry by ID and adjusts player points accordingly.
     * Now decoupled from RankingService - calls adjustPoints instead of
     * manipulating ranks directly.
     *
     * @param id The History entry ID to delete
     */
    @Transactional
    @SuppressWarnings("null")
    public void deleteHistoryById(int id) {
        HistoryEntity history = historyRepository.findById((long) id)
                .orElseThrow(() -> new ResourceNotFoundException("History entry not found: " + id));

        // Calculate deltas (negative to subtract from player's total)
        int pointsDelta = -history.getPoints();
        int victoryDelta = history.getVictory() ? -1 : 0;

        // Adjust player's ranking via RankingService (only if player exists)
        PlayerEntity player = history.getPlayer();
        if (player != null) {
            rankingService.adjustPoints(player.getId(), pointsDelta, victoryDelta);
        } else {
            log.warn("History entry #{} has no associated player, skipping ranking adjustment", id);
        }

        // Delete the history entry
        historyRepository.deleteById((long) id);

        log.debug("Deleted history entry #{}", id);
    }

    /**
     * Deletes all history entries.
     */
    @Transactional
    public void deleteAllHistory() {
        historyRepository.deleteAll();
        log.debug("Deleted all history entries");
    }

    /**
     * Deletes all history entries for a specific player.
     *
     * @param player The player entity
     */
    @Transactional
    public void deleteHistoryByPlayer(PlayerEntity player) {
        historyRepository.deleteByPlayer(player);
        log.debug("Deleted all history entries for player: {}", player.getName());
    }

    /**
     * Convert HistoryDTO to HistoryEntity.
     */
    @SuppressWarnings("null")
    private HistoryEntity toEntity(HistoryDTO dto) {
        HistoryEntity entity = new HistoryEntity();
        entity.setPoints(dto.getPoints());
        entity.setVictory(dto.isVictory());

        // Find and set player
        if (dto.getPlayer() != null && dto.getPlayer().getPlayerId() != null) {
            PlayerEntity player = playerRepository.findById(dto.getPlayer().getPlayerId())
                    .orElseThrow(
                            () -> new ResourceNotFoundException("Player not found: " + dto.getPlayer().getPlayerId()));
            entity.setPlayer(player);
        }

        // Set console data
        if (dto.getConsole() != null) {
            entity.setConsoleName(dto.getConsole().getName());
            entity.setConsolePicture(dto.getConsole().getPicture());
        }

        // Set cups data
        if (dto.getCups() != null) {
            entity.setCupName(dto.getCups().getName());
            entity.setCupPicture(dto.getCups().getPicture());
        }

        return entity;
    }
}
