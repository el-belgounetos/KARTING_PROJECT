package com.example.nat_kart_api.repository;

import com.example.nat_kart_api.entity.KarterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for Karter entities.
 * Provides CRUD operations and custom queries for ranking management.
 */
@Repository
public interface KarterRepository extends JpaRepository<KarterEntity, Long> {

    /**
     * Find a karter by player ID.
     * 
     * @param playerId The player's ID
     * @return Optional containing the karter if found
     */
    Optional<KarterEntity> findByPlayerId(Long playerId);

    /**
     * Find a karter by name.
     * 
     * @param name The player's name
     * @return Optional containing the karter if found
     */
    Optional<KarterEntity> findByName(String name);

    /**
     * Get all karters ordered by points descending.
     * 
     * @return List of karters sorted by points
     */
    List<KarterEntity> findAllByOrderByPointsDesc();

    /**
     * Delete a karter by name.
     * 
     * @param name The player's name
     */
    void deleteByName(String name);
}
