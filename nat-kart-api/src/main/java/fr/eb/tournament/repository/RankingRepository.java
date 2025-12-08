package fr.eb.tournament.repository;

import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.entity.RankingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for Ranking entities.
 */
@Repository
public interface RankingRepository extends JpaRepository<RankingEntity, Long> {

    /**
     * Find ranking by player.
     * 
     * @param player The player entity
     * @return Optional containing the ranking if found
     */
    Optional<RankingEntity> findByPlayer(PlayerEntity player);

    /**
     * Find all rankings ordered by points descending.
     * 
     * @return List of rankings sorted by points (highest first)
     */
    List<RankingEntity> findAllByOrderByPointsDesc();
}
