package fr.eb.tournament.controller;

import fr.eb.tournament.dto.PlayerDTO;
import fr.eb.tournament.dto.TeamDTO;
import fr.eb.tournament.service.ImageService;
import fr.eb.tournament.service.TeamService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/teams")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @Autowired
    private fr.eb.tournament.service.TeamLogoService teamLogoService;

    @Autowired
    private ImageService imageService;

    @GetMapping
    public ResponseEntity<List<TeamDTO>> getAllTeams() {
        return ResponseEntity.ok(teamService.getAllTeams());
    }

    @GetMapping("/logos")
    public ResponseEntity<List<String>> getAllTeamLogos() {
        return ResponseEntity.ok(teamLogoService.getAllTeamLogos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamDTO> getTeamById(@PathVariable Long id) {
        return teamService.getTeamById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TeamDTO> createTeam(@Valid @RequestBody TeamDTO teamDTO) {
        return new ResponseEntity<>(teamService.createTeam(teamDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamDTO> updateTeam(@PathVariable Long id, @Valid @RequestBody TeamDTO teamDTO) {
        return teamService.updateTeam(id, teamDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeam(@PathVariable Long id) {
        teamService.deleteTeam(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/players")
    public ResponseEntity<List<PlayerDTO>> getPlayersByTeam(@PathVariable Long id) {
        return ResponseEntity.ok(teamService.getPlayersByTeamId(id));
    }

    @PostMapping("/logos/upload")
    public ResponseEntity<?> uploadTeamLogo(@RequestParam("file") MultipartFile file) {
        return imageService.handleImageUpload(file, "images/team", teamLogoService::getAllTeamLogos);
    }

    @DeleteMapping("/logos/{filename}")
    public ResponseEntity<?> deleteTeamLogo(@PathVariable String filename) {
        return imageService.handleImageDelete(filename, "images/team", teamLogoService::getAllTeamLogos, null);
    }
}
