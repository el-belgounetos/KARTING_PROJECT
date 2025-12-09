package fr.eb.tournament.dto;

/**
 * DTO for team statistics.
 */
public class TeamStatsDTO {

    private long totalTeams;
    private long teamsWithLogo;
    private long teamsWithoutLogo;

    // Constructors
    public TeamStatsDTO() {
    }

    public TeamStatsDTO(long totalTeams, long teamsWithLogo, long teamsWithoutLogo) {
        this.totalTeams = totalTeams;
        this.teamsWithLogo = teamsWithLogo;
        this.teamsWithoutLogo = teamsWithoutLogo;
    }

    // Getters and Setters
    public long getTotalTeams() {
        return totalTeams;
    }

    public void setTotalTeams(long totalTeams) {
        this.totalTeams = totalTeams;
    }

    public long getTeamsWithLogo() {
        return teamsWithLogo;
    }

    public void setTeamsWithLogo(long teamsWithLogo) {
        this.teamsWithLogo = teamsWithLogo;
    }

    public long getTeamsWithoutLogo() {
        return teamsWithoutLogo;
    }

    public void setTeamsWithoutLogo(long teamsWithoutLogo) {
        this.teamsWithoutLogo = teamsWithoutLogo;
    }
}
