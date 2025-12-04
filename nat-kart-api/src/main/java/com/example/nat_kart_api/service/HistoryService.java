package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.HistoriqueDTO;
import com.example.nat_kart_api.dto.ConsoleDTO;
import com.example.nat_kart_api.dto.CupsDTO;
import com.example.nat_kart_api.dto.KarterDTO;
import com.example.nat_kart_api.entity.HistoryEntity;
import com.example.nat_kart_api.entity.PlayerEntity;
import com.example.nat_kart_api.repository.HistoryRepository;
import com.example.nat_kart_api.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service responsible for managing game history (historique).
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

    /**
     * Gets all history entries.
     *
     * @return List of all historique DTOs
     */
    public List<HistoriqueDTO> getPlayerHistorique() {
        return historyRepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    /**
     * Gets history entries for a specific player.
     *
     * @param playerName The player's name
     * @return List of historique DTOs for the specified player
     */
    public List<HistoriqueDTO> getPlayerHistoriqueByPlayerName(String playerName) {
        log.debug("Getting history for player: {}", playerName);

        // Find all players and filter by name (since name could be "Name Firstname")
        List<HistoriqueDTO> result = historyRepository.findAll().stream()
                .map(this::toDTO)
                .filter(dto -> {
                    if (dto.getPlayer() == null)
                        return false;
                    String fullName = dto.getPlayer().getName();
                    return fullName != null && fullName.contains(playerName);
                })
                .collect(Collectors.toList());

        log.debug("Found {} entries for {}", result.size(), playerName);
        return result;
    }

    /**
     * Adds a new history entry.
     *
     * @param historiqueDTO The history entry to add
     */
    @Transactional
    public void updatePlayerHistorique(HistoriqueDTO historiqueDTO) {
        log.debug("Saving history entry for player: {}",
                historiqueDTO.getPlayer() != null ? historiqueDTO.getPlayer().getName() : "NULL");

        HistoryEntity entity = toEntity(historiqueDTO);
        HistoryEntity saved = historyRepository.save(entity);

        log.debug("Saved history entry with ID: {}", saved.getId());
        log.debug("Total history entries: {}", historyRepository.count());
    }

    /**
     * Deletes a history entry by ID and adjusts player points accordingly.
     * Now decoupled from RankingService - calls adjustPoints instead of
     * manipulating ranks directly.
     *
     * @param id The historique entry ID to delete
     */
    @Transactional
    public void deleteHistoriqueById(int id) {
        HistoryEntity history = historyRepository.findById((long) id)
                .orElseThrow(() -> new RuntimeException("History entry not found: " + id));

        // Calculate deltas (negative to subtract from player's total)
        int pointsDelta = -history.getPoints();
        int victoryDelta = history.getVictory() ? -1 : 0;

        // Adjust player's ranking via RankingService
        rankingService.adjustPoints(history.getPlayer().getId(), pointsDelta, victoryDelta);

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
     * Convert HistoryEntity to HistoriqueDTO.
     */
    private HistoriqueDTO toDTO(HistoryEntity entity) {
        HistoriqueDTO dto = new HistoriqueDTO();
        dto.setId(entity.getId().intValue());
        dto.setPoints(entity.getPoints());
        dto.setVictory(entity.getVictory());

        // Convert player to KarterDTO
        if (entity.getPlayer() != null) {
            KarterDTO karterDTO = new KarterDTO();
            PlayerEntity player = entity.getPlayer();
            karterDTO.setPlayerId(player.getId());
            karterDTO.setName(player.getName() + " " + player.getFirstname());
            karterDTO.setPicture(player.getPicture());
            karterDTO.setCategory(player.getCategory());
            dto.setPlayer(karterDTO);
        }

        // Convert console data
        if (entity.getConsoleName() != null) {
            ConsoleDTO consoleDTO = new ConsoleDTO();
            consoleDTO.setName(entity.getConsoleName());
            consoleDTO.setPicture(entity.getConsolePicture());
            dto.setConsole(consoleDTO);
        }

        // Convert cups data
        if (entity.getCupName() != null) {
            CupsDTO cupsDTO = new CupsDTO();
            cupsDTO.setName(entity.getCupName());
            cupsDTO.setPicture(entity.getCupPicture());
            dto.setCups(cupsDTO);
        }

        return dto;
    }

    /**
     * Convert HistoriqueDTO to HistoryEntity.
     */
    private HistoryEntity toEntity(HistoriqueDTO dto) {
        HistoryEntity entity = new HistoryEntity();
        entity.setPoints(dto.getPoints());
        entity.setVictory(dto.isVictory());

        // Find and set player
        if (dto.getPlayer() != null && dto.getPlayer().getPlayerId() != null) {
            PlayerEntity player = playerRepository.findById(dto.getPlayer().getPlayerId())
                    .orElseThrow(() -> new RuntimeException("Player not found: " + dto.getPlayer().getPlayerId()));
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
