
package fr.eb.tournament.controller;

import fr.eb.tournament.dto.TournamentConfigDTO;
import fr.eb.tournament.dto.TeamStatsDTO;
import fr.eb.tournament.service.PlayerService;
import fr.eb.tournament.service.TeamService;
import fr.eb.tournament.service.TournamentConfigService;
import fr.eb.tournament.service.QRCodeService;
import org.springframework.beans.factory.annotation.Value;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final PlayerService playerService;
    private final TeamService teamService;
    private final TournamentConfigService tournamentConfigService;
	private final QRCodeService qrCodeService;

	@Value("${frontend.url}")
	private String frontendUrl;

    public AdminController(
            PlayerService playerService,
            TeamService teamService,
            TournamentConfigService tournamentConfigService,
			QRCodeService qrCodeService) {
        this.playerService = playerService;
        this.teamService = teamService;
        this.tournamentConfigService = tournamentConfigService;
		this.qrCodeService = qrCodeService;
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
	// ========== QR Code Endpoint ==========

	@GetMapping("/qrcode")
	public org.springframework.http.ResponseEntity<byte[]> generateQRCode() {
		try {
			// Utilise l'URL du frontend configurée dans application.yml
			String rankingUrl = frontendUrl + "/ranking";
			
			// Si l'URL contient localhost ou 127.0.0.1, la remplacer par le hostname de la machine
			// pour permettre l'accès depuis d'autres appareils (mobiles)
			if (rankingUrl.contains("localhost") || rankingUrl.contains("127.0.0.1")) {
				String hostname = java.net.InetAddress.getLocalHost().getHostName();
				rankingUrl = rankingUrl.replace("localhost", hostname);
				rankingUrl = rankingUrl.replace("127.0.0.1", hostname);
			}
			
			byte[] qrCode = qrCodeService.generateQRCode(rankingUrl, 300, 300);
			org.springframework.http.HttpHeaders headers = new org.springframework.http.HttpHeaders();
			headers.setContentType(org.springframework.http.MediaType.IMAGE_PNG);
			return new org.springframework.http.ResponseEntity<>(qrCode, headers, org.springframework.http.HttpStatus.OK);
		} catch (Exception e) {
			return org.springframework.http.ResponseEntity.status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}