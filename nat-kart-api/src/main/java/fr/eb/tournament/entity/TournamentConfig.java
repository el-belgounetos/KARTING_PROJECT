package fr.eb.tournament.entity;

import jakarta.persistence.*;

/**
 * Entity representing tournament configuration.
 * Stores global settings for tournament management.
 */
@Entity
@Table(name = "tournament_config")
public class TournamentConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "allow_player_image_reuse", nullable = false)
    private Boolean allowPlayerImageReuse = true;

    @Column(name = "allow_team_logo_reuse", nullable = false)
    private Boolean allowTeamLogoReuse = true;

    // Constructors
    public TournamentConfig() {
    }

    public TournamentConfig(Boolean allowPlayerImageReuse, Boolean allowTeamLogoReuse) {
        this.allowPlayerImageReuse = allowPlayerImageReuse;
        this.allowTeamLogoReuse = allowTeamLogoReuse;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getAllowPlayerImageReuse() {
        return allowPlayerImageReuse;
    }

    public void setAllowPlayerImageReuse(Boolean allowPlayerImageReuse) {
        this.allowPlayerImageReuse = allowPlayerImageReuse;
    }

    public Boolean getAllowTeamLogoReuse() {
        return allowTeamLogoReuse;
    }

    public void setAllowTeamLogoReuse(Boolean allowTeamLogoReuse) {
        this.allowTeamLogoReuse = allowTeamLogoReuse;
    }
}
