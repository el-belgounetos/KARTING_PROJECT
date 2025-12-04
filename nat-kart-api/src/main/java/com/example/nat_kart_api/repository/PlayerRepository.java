package com.example.nat_kart_api.repository;

import com.example.nat_kart_api.entity.PlayerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data JPA repository for Player entities.
 * Provides CRUD operations and custom queries.
 */
@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Long> {

    /**
     * Find a player by their pseudo (username).
     * 
     * @param pseudo The player's pseudo
     * @return Optional containing the player if found
     */
    Optional<PlayerEntity> findByPseudo(String pseudo);

    /**
     * Check if a player with the given pseudo already exists (case-insensitive).
     * 
     * @param pseudo The pseudo to check
     * @return true if exists, false otherwise
     */
    boolean existsByPseudoIgnoreCase(String pseudo);
}
