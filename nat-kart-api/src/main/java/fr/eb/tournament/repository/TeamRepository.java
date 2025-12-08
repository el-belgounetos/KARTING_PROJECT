package fr.eb.tournament.repository;

import fr.eb.tournament.entity.TeamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
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

    /**
     * Find all logos currently assigned to teams (non-null and non-empty).
     * Used to rebuild the excluded logos list on application startup.
     *
     * @return List of logo filenames in use
     */
    @Query("SELECT DISTINCT t.logo FROM TeamEntity t WHERE t.logo IS NOT NULL AND t.logo != ''")
    List<String> findAllAssignedLogos();

    /**
     * Removes a logo from all teams efficiently using a direct DB update.
     *
     * @param logo        The logo filename
     * @param logoWithPng The logo filename with extension
     */
    @Modifying
    @Query("UPDATE TeamEntity t SET t.logo = null WHERE t.logo = :logo OR t.logo = :logoWithPng")
    void removeLogoFromAll(@Param("logo") String logo, @Param("logoWithPng") String logoWithPng);
}
