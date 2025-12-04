package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.KarterDTO;
import com.example.nat_kart_api.entity.PlayerEntity;
import com.example.nat_kart_api.entity.RankingEntity;
import com.example.nat_kart_api.repository.PlayerRepository;
import com.example.nat_kart_api.repository.RankingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service for managing player rankings and scores.
 */
@Service
@RequiredArgsConstructor
public class RankingService {

    private final RankingRepository rankingRepository;
    private final PlayerRepository playerRepository;

    /**
     * Get all rankings sorted by points (highest first).
     *
     * @return List of ranking DTOs
     */
    public List<KarterDTO> getAllRanks() {
        return rankingRepository.findAllByOrderByPointsDesc().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    /**
     * Update points and victories for a player by their ID.
     *
     * @param playerId  The player's ID
     * @param newPoints New points value
     * @param victory   New victory count
     */
    @Transactional
    public void updatePointsByPlayerId(Long playerId, int newPoints, int victory) {
        // Find player by ID
        PlayerEntity player = playerRepository.findById(playerId)
                .orElseThrow(() -> new RuntimeException("Player not found with id: " + playerId));

        // Find or create ranking for this player
        RankingEntity ranking = rankingRepository.findByPlayer(player)
                .orElseGet(() -> {
                    RankingEntity newRanking = new RankingEntity();
                    newRanking.setPlayer(player);
                    newRanking.setPoints(0);
                    newRanking.setVictory(0);
                    newRanking.setRank(0);
                    return newRanking;
                });

        // Update points and victories
        ranking.setPoints(newPoints);
        ranking.setVictory(victory);
        rankingRepository.save(ranking);

        // Recalculate ranks
        this.rerankEveryone();
    }

    /**
     * Create a new ranking entry for a player.
     *
     * @param playerId The player's ID
     */
    @Transactional
    public void createRankingEntry(Long playerId) {
        PlayerEntity player = playerRepository.findById(playerId)
                .orElseThrow(() -> new RuntimeException("Player not found with id: " + playerId));

        // Check if ranking already exists
        if (rankingRepository.findByPlayer(player).isPresent()) {
            throw new RuntimeException("Ranking already exists for player: " + player.getPseudo());
        }

        RankingEntity ranking = new RankingEntity();
        ranking.setPlayer(player);
        ranking.setPoints(0);
        ranking.setVictory(0);
        ranking.setRank(0);
        rankingRepository.save(ranking);

        this.rerankEveryone();
    }

    /**
     * Delete ranking entry for a player.
     *
     * @param playerPseudo The player's pseudo
     */
    @Transactional
    public void deleteRankingEntry(String playerPseudo) {
        PlayerEntity player = playerRepository.findByPseudo(playerPseudo)
                .orElseThrow(() -> new RuntimeException("Player not found: " + playerPseudo));

        RankingEntity ranking = rankingRepository.findByPlayer(player)
                .orElseThrow(() -> new RuntimeException("Ranking not found for player: " + playerPseudo));

        rankingRepository.delete(ranking);
        this.rerankEveryone();
    }

    /**
     * Clear all rankings.
     */
    @Transactional
    public void clearRanking() {
        rankingRepository.deleteAll();
    }

    /**
     * Recalculate ranks for all players based on points.
     * Players with more points get better (lower) rank numbers.
     */
    @Transactional
    public void rerankEveryone() {
        List<RankingEntity> rankings = rankingRepository.findAllByOrderByPointsDesc();

        int rank = 1;
        for (RankingEntity ranking : rankings) {
            ranking.setRank(rank++);
        }

        rankingRepository.saveAll(rankings);
    }

    /**
     * Convert RankingEntity to KarterDTO.
     * Player information (name, picture, category) is retrieved from the player
     * relationship.
     *
     * @param entity The ranking entity
     * @return The DTO
     */
    private KarterDTO toDTO(RankingEntity entity) {
        PlayerEntity player = entity.getPlayer();

        // Combine player's name and firstname for display
        String displayName = player.getName() + " " + player.getFirstname();

        KarterDTO dto = new KarterDTO();
        dto.setPlayerId(player.getId());
        dto.setName(displayName);
        dto.setPoints(entity.getPoints());
        dto.setVictory(entity.getVictory());
        dto.setPicture(player.getPicture());
        dto.setCategory(player.getCategory());
        dto.setRank(entity.getRank());

        return dto;
    }
}
