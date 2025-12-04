package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.HistoriqueDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Service responsible for managing game history (historique).
 * Handles storage and retrieval of player game sessions.
 */
@Service
public class HistoryService {

    private List<HistoriqueDTO> playerHistorique = new ArrayList<>();
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
        System.out.println("[DEBUG] Getting history for player: " + playerName);
        System.out.println("[DEBUG] Total history entries in memory: " + this.playerHistorique.size());

        List<HistoriqueDTO> result = this.playerHistorique
                .stream()
                .filter(histo -> histo.getPlayer().getName().equals(playerName))
                .toList();

        System.out.println("[DEBUG] Found " + result.size() + " entries for " + playerName);
        return result;
    }

    /**
     * Adds a new history entry.
     *
     * @param historiqueDTO The history entry to add
     */
    public void updatePlayerHistorique(HistoriqueDTO historiqueDTO) {
        historiqueDTO.setId(this.historiqueId);
        System.out.println("[DEBUG] Saving history entry #" + this.historiqueId + " for player: " +
                (historiqueDTO.getPlayer() != null ? historiqueDTO.getPlayer().getName() : "NULL"));

        this.playerHistorique.add(historiqueDTO);
        this.historiqueId++;

        System.out.println("[DEBUG] Total history entries: " + this.playerHistorique.size());
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
