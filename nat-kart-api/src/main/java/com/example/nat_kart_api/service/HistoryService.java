package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.HistoriqueDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Service responsible for managing game history (historique).
 * Handles storage and retrieval of player game sessions.
 */
@Service
@Slf4j
public class HistoryService {

    private final List<HistoriqueDTO> playerHistorique = new CopyOnWriteArrayList<>();
    private int historiqueId = 1;

    /**
     * Gets all history entries.
     *
     * @return List of all historique DTOs
     */
    public List<HistoriqueDTO> getPlayerHistorique() {
        return playerHistorique;
    }

    /**
     * Gets history entries for a specific player.
     *
     * @param playerName The player's name
     * @return List of historique DTOs for the specified player
     */
    public List<HistoriqueDTO> getPlayerHistoriqueByPlayerName(String playerName) {
        log.debug("Getting history for player: {}", playerName);
        log.debug("Total history entries in memory: {}", this.playerHistorique.size());

        List<HistoriqueDTO> result = this.playerHistorique
                .stream()
                .filter(histo -> histo.getPlayer().getName().equals(playerName))
                .toList();

        log.debug("Found {} entries for {}", result.size(), playerName);
        return result;
    }

    /**
     * Adds a new history entry.
     *
     * @param historiqueDTO The history entry to add
     */
    public void updatePlayerHistorique(HistoriqueDTO historiqueDTO) {
        historiqueDTO.setId(this.historiqueId);
        log.debug("Saving history entry #{} for player: {}",
                this.historiqueId,
                historiqueDTO.getPlayer() != null ? historiqueDTO.getPlayer().getName() : "NULL");

        this.playerHistorique.add(historiqueDTO);
        this.historiqueId++;

        log.debug("Total history entries: {}", this.playerHistorique.size());
    }

    /**
     * Deletes a history entry by ID and adjusts player points accordingly.
     *
     * @param id    The historique entry ID to delete
     * @param ranks List of current rankings (will be modified)
     */
    public void deleteHistoriqueById(int id, List<com.example.nat_kart_api.dto.KarterDTO> ranks) {
        this.playerHistorique.forEach(dto -> {
            if (dto.getId() == id) {
                int victoryToRemove = dto.isVictory() ? -1 : 0;

                ranks.forEach(player -> {
                    if (player != null && Objects.equals(player.getName(), dto.getPlayer().getName())) {
                        player.setPoints(player.getPoints() - dto.getPoints());
                        player.setVictory(player.getVictory() + victoryToRemove);
                    }
                });
            }
        });

        this.playerHistorique.removeIf(historique -> historique.getId() == id);
    }
}
