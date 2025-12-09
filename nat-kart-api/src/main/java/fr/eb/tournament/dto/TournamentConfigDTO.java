package fr.eb.tournament.dto;

import jakarta.validation.constraints.NotNull;

/**
 * DTO for tournament configuration.
 */
public class TournamentConfigDTO {

    private Long id;

    @NotNull(message = "allowPlayerImageReuse cannot be null")
    private Boolean allowPlayerImageReuse;

    @NotNull(message = "allowTeamLogoReuse cannot be null")
    private Boolean allowTeamLogoReuse;

    // Constructors
    public TournamentConfigDTO() {
    }

    public TournamentConfigDTO(Long id, Boolean allowPlayerImageReuse, Boolean allowTeamLogoReuse) {
        this.id = id;
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
