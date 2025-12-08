package fr.eb.tournament.repository;

import fr.eb.tournament.entity.TeamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeamRepository extends JpaRepository<TeamEntity, Long> {
    /**
     * Find team by exact name match.
     * Used for import functionality to find existing teams.
     */
    Optional<TeamEntity> findByName(String name);

    /**
     * Check if team with given name exists.
     * Used for validation before creating new teams.
     */
    boolean existsByName(String name);
}
