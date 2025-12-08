package fr.eb.tournament.repository;

import fr.eb.tournament.entity.HistoryEntity;
import fr.eb.tournament.entity.PlayerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA repository for History entities.
 * Provides CRUD operations and custom queries for game history.
 */
@Repository
public interface HistoryRepository extends JpaRepository<HistoryEntity, Long> {

    /**
     * Find all history entries for a specific player, ordered by most recent first.
     *
     * @param player The player entity
     * @return List of history entries for this player
     */
    List<HistoryEntity> findByPlayerOrderByIdDesc(PlayerEntity player);

    /**
     * Delete all history entries for a specific player.
     *
     * @param player The player entity
     */
    void deleteByPlayer(PlayerEntity player);

    /**
     * Count history entries for a specific player.
     *
     * @param player The player entity
     * @return Number of games played
     */
    long countByPlayer(PlayerEntity player);

    /**
     * Find history entries where player name contains the given string (case
     * insensitive).
     * 
     * @param name The name to search for
     * @return List of matching history entries
     */
    List<HistoryEntity> findByPlayer_NameContainingIgnoreCase(String name);

    /**
     * Find history entries by player ID.
     * 
     * @param playerId The player ID
     * @return List of matching history entries
     */
    List<HistoryEntity> findByPlayer_Id(Long playerId);
}
