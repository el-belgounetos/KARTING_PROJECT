
package fr.eb.tournament.controller;

import fr.eb.tournament.dto.TournamentConfigDTO;
import fr.eb.tournament.dto.TeamStatsDTO;
import fr.eb.tournament.service.PlayerService;
import fr.eb.tournament.service.TeamService;
import fr.eb.tournament.service.TournamentConfigService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final PlayerService playerService;
    private final TeamService teamService;
    private final TournamentConfigService tournamentConfigService;

    public AdminController(
            PlayerService playerService,
            TeamService teamService,
            TournamentConfigService tournamentConfigService) {
        this.playerService = playerService;
        this.teamService = teamService;
        this.tournamentConfigService = tournamentConfigService;
    }

    @PostMapping("/generate-players/{count}")
    public void generatePlayers(
            @PathVariable int count,
            @RequestParam(defaultValue = "true") boolean assignImage) {
        playerService.generatePlayers(count, assignImage);
    }

    @DeleteMapping("/players")
    public void deleteAllPlayers() {
        playerService.deleteAllPlayers();
    }

    @GetMapping("/stats")
    public fr.eb.tournament.dto.PlayerStatsDTO getStats() {
        return playerService.getPlayerStats();
    }

    // ========== Team Management Endpoints ==========

    @PostMapping("/generate-teams/{count}")
    public void generateTeams(
            @PathVariable int count,
            @RequestParam(defaultValue = "true") boolean assignLogo) {
        teamService.generateTeams(count, assignLogo);
    }

    @DeleteMapping("/teams")
    public void deleteAllTeams() {
        teamService.deleteAllTeams();
    }

    @GetMapping("/team-stats")
    public TeamStatsDTO getTeamStats() {
        return teamService.getTeamStats();
    }

    // ========== Tournament Configuration Endpoints ==========

    @GetMapping("/tournament-config")
    public TournamentConfigDTO getTournamentConfig() {
        return tournamentConfigService.getConfig();
    }

    @PutMapping("/tournament-config")
    public TournamentConfigDTO updateTournamentConfig(@Valid @RequestBody TournamentConfigDTO configDTO) {
        return tournamentConfigService.updateConfig(configDTO);
    }
}
