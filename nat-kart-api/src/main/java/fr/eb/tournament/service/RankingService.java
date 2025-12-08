package fr.eb.tournament.service;

import fr.eb.tournament.dto.RankingDTO;
import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.entity.RankingEntity;
import fr.eb.tournament.repository.HistoryRepository;
import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.repository.RankingRepository;
import fr.eb.tournament.exception.ResourceNotFoundException;
import fr.eb.tournament.mapper.RankingMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service for managing player rankings and scores.
 */
@Service
@RequiredArgsConstructor
public class RankingService {

    private final RankingRepository rankingRepository;
    private final PlayerRepository playerRepository;
    private final HistoryRepository historyRepository;
    private final RankingMapper rankingMapper;

    /**
     * Get all rankings sorted by points (highest first).
     *
     * @return List of ranking DTOs
     */
    public List<RankingDTO> getAllRanks() {
        return rankingRepository.findAllByOrderByPointsDesc().stream()
                .map(entity -> {
                    RankingDTO dto = rankingMapper.toDTO(entity);
                    // Set total games (not handled by mapper to avoid repository dependency)
                    Long count = historyRepository.countByPlayer(entity.getPlayer());
                    dto.setTotalGames(count != null ? count.intValue() : 0);
                    return dto;
                })
                .toList();
    }

    /**
     * Update points and victories for a player by their ID.
     *
     * @param playerId  The player's ID
     * @param newPoints New points value
     * @param victory   New victory count
     */
    @Transactional
    public void updatePointsByPlayerId(@NonNull Long playerId, int newPoints, int victory) {
        // Find player by ID
        PlayerEntity player = playerRepository.findById(playerId)
                .orElseThrow(() -> new ResourceNotFoundException("Player not found with id: " + playerId));

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
    public void createRankingEntry(@NonNull Long playerId) {
        PlayerEntity player = playerRepository.findById(playerId)
                .orElseThrow(() -> new ResourceNotFoundException("Player not found with id: " + playerId));

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
    @SuppressWarnings("null")
    @Transactional
    public void deleteRankingEntry(String playerPseudo) {
        PlayerEntity player = playerRepository.findByPseudo(playerPseudo)
                .orElseThrow(() -> new ResourceNotFoundException("Player not found: " + playerPseudo));

        RankingEntity ranking = rankingRepository.findByPlayer(player)
                .orElseThrow(() -> new ResourceNotFoundException("Ranking not found for player: " + playerPseudo));
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
    @SuppressWarnings("null")
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
     * Adjust points and victories for a player (used when deleting history).
     * Applies deltas to current values.
     *
     * @param playerId     The player's ID
     * @param pointsDelta  Points to add (negative to subtract)
     * @param victoryDelta Victories to add (negative to subtract)
     */
    @Transactional
    public void adjustPoints(@NonNull Long playerId, int pointsDelta, int victoryDelta) {
        PlayerEntity player = playerRepository.findById(playerId)
                .orElseThrow(() -> new ResourceNotFoundException("Player not found with id: " + playerId));

        RankingEntity ranking = rankingRepository.findByPlayer(player)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Ranking not found for player: " + player.getPseudo()));

        // Apply deltas
        ranking.setPoints(ranking.getPoints() + pointsDelta);
        ranking.setVictory(ranking.getVictory() + victoryDelta);

        rankingRepository.save(ranking);

        // Recalculate ranks
        this.rerankEveryone();
    }
}
