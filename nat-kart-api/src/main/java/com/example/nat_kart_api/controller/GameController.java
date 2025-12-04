package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.*;
import com.example.nat_kart_api.service.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GameController {

    private final CharacterService characterService;
    private final RankingService rankingService;
    private final ConsoleService consoleService;
    private final HistoryService historyService;
    private final PlayerService playerService;

    public GameController(
            CharacterService characterService,
            RankingService rankingService,
            ConsoleService consoleService,
            HistoryService historyService,
            PlayerService playerService) {
        this.characterService = characterService;
        this.rankingService = rankingService;
        this.consoleService = consoleService;
        this.historyService = historyService;
        this.playerService = playerService;
    }

    // === Character / Avatar Management ===

    @GetMapping("/personnages")
    public List<String> getAllCaracters() {
        return this.characterService.getAllCaracters();
    }

    @GetMapping("/personnages/exclude")
    public List<String> getAllExcludeCaracters() {
        return this.characterService.getExcludePool();
    }

    @PostMapping("/exclude/{name}")
    public List<String> excludeCaracterByName(@PathVariable String name) {
        // Remove the picture from any players using it
        this.playerService.removePictureFromPlayers(name);
        // Then exclude it from the pool
        return this.characterService.removeCaracter(name);
    }

    @PostMapping("/exclude/clear")
    public List<String> clearExcludeCaracters() {
        return this.characterService.resetExcludeList();
    }

    @PostMapping("/introduce/{name}")
    public List<String> introduceCaracter(@PathVariable String name) {
        return this.characterService.introduceCaracter(name);
    }

    // === Ranking Management ===

    @GetMapping("/ranks")
    public List<KarterDTO> getAllRanks() {
        return this.rankingService.getAllRanks();
    }

    @PostMapping("/ranks")
    public void updateRank(@RequestBody KarterDTO player) {
        this.rankingService.updatePointsByName(
                player.getName(),
                player.getPoints(),
                player.getVictory(),
                player.getCategory());
    }

    // === Console Management ===

    @GetMapping("/consoles")
    public List<ConsoleDTO> getAllConsoles() {
        return this.consoleService.getAllConsole();
    }

    @GetMapping("/counters")
    public List<CounterDTO> getAllCounters() {
        return this.consoleService.getAllCounters();
    }

    @PostMapping("/counters")
    public void setAllCounters(@RequestBody List<CounterDTO> counters) {
        this.consoleService.setAllCounters(counters);
    }

    // === History Management ===

    @GetMapping("/historique/{playerName}")
    public List<HistoriqueDTO> getPlayerHistorique(@PathVariable String playerName) {
        return this.historyService.getPlayerHistoriqueByPlayerName(playerName);
    }

    @PostMapping("/historique")
    public void updatePlayerHistorique(@RequestBody HistoriqueDTO historique) {
        this.historyService.updatePlayerHistorique(historique);
    }

    @DeleteMapping("/historique/{historiqueId}")
    public void deleteHistorique(@PathVariable int historiqueId) {
        this.historyService.deleteHistoriqueById(historiqueId, this.rankingService.getAllRanks());
    }

    // === Player Management ===

    @GetMapping("/players")
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return ResponseEntity.ok(this.playerService.getAllPlayers());
    }

    @PostMapping("/players")
    public ResponseEntity<Void> createPlayer(@RequestBody PlayerDTO player) {
        this.playerService.createPlayer(player);
        return ResponseEntity.status(201).build(); // 201 Created
    }

    @PutMapping("/players")
    public ResponseEntity<Void> updatePlayer(@RequestBody PlayerDTO player) {
        this.playerService.updatePlayer(player);
        return ResponseEntity.ok().build(); // 200 OK
    }

    @DeleteMapping("/players")
    public ResponseEntity<Void> deleteAllPlayers() {
        this.playerService.deleteAllPlayers();
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    @DeleteMapping("/players/{pseudo}")
    public ResponseEntity<Void> deletePlayer(@PathVariable String pseudo) {
        this.playerService.deletePlayer(pseudo);
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    @PostMapping("/admin/generate-players/{count}")
    public void generatePlayers(
            @PathVariable int count,
            @RequestParam(defaultValue = "true") boolean assignImage) {
        playerService.generatePlayers(count, assignImage);
    }
}
