package fr.eb.tournament.repository;

import fr.eb.tournament.entity.TournamentConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for TournamentConfig entity.
 */
@Repository
public interface TournamentConfigRepository extends JpaRepository<TournamentConfig, Long> {
}
