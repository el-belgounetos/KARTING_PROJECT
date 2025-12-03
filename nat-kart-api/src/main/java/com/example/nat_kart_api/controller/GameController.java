package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.ConsoleDTO;
import com.example.nat_kart_api.dto.CounterDTO;
import com.example.nat_kart_api.dto.HistoriqueDTO;
import com.example.nat_kart_api.dto.KarterDTO;
import com.example.nat_kart_api.service.GameService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameController {

    private GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/personnages")
    public List<String> getAllCaracters() {
        return this.gameService.getAllCaracters();
    }

    @GetMapping("/personnages/exclude")
    public List<String> getAllExcludeCaracters() {
        return this.gameService.getExcludePool();
    }

    @PostMapping("/exclude/{name}")
    public List<String> excludeCaracterByName(@PathVariable String name) {
        return this.gameService.removeCaracter(name);
    }

    @PostMapping("/exclude/clear")
    public List<String> clearExcludeCaracters() {
        return this.gameService.resetExcludeList();
    }

    @PostMapping("/introduce/{name}")
    public List<String> introduceCaracter(@PathVariable String name) {
        return this.gameService.introduceCaracter(name);
    }

    @GetMapping("/ranks")
    public List<KarterDTO> getAllRanks() {
        return this.gameService.getAllRanks();
    }

    @PostMapping("/ranks")
    public void updateRank(@RequestBody KarterDTO player) {
        this.gameService.updatePointsByName(player.getName(), player.getPoints(), player.getVictory());
    }

    @GetMapping("/consoles")
    public List<ConsoleDTO> getAllConsoles() {
        return this.gameService.getAllConsole();
    }

    @GetMapping("/historique/{playerName}")
    public List<HistoriqueDTO> getPlayerHistorique(@PathVariable String playerName) {
        return this.gameService.getPlayerHistoriqueByPlayerName(playerName);
    }

    @PostMapping("/historique")
    public void updatePlayerHistorique(@RequestBody HistoriqueDTO historique) {
        this.gameService.updatePlayerHistorique(historique);
    }

    @DeleteMapping("/historique/{historiqueId}")
    public void getPlayerHistorique(@PathVariable int historiqueId) {
        this.gameService.deleteHistoriqueById(historiqueId);
    }

    @GetMapping("/counters")
    public List<CounterDTO> getAllCounters() {
        return this.gameService.getAllCounters();
    }

    @PostMapping("/counters")
    public void setAllCounters(@RequestBody List<CounterDTO> counters) {
        this.gameService.setAllCounters(counters);
    }

    @GetMapping("/players")
    public List<com.example.nat_kart_api.dto.PlayerDTO> getAllPlayers() {
        return this.gameService.getAllPlayers();
    }

    @PostMapping("/players")
    public void createPlayer(@RequestBody com.example.nat_kart_api.dto.PlayerDTO player) {
        this.gameService.createPlayer(player);
    }

    @PutMapping("/players")
    public void updatePlayer(@RequestBody com.example.nat_kart_api.dto.PlayerDTO player) {
        this.gameService.updatePlayer(player);
    }

    @PostMapping("/admin/generate-players/{count}")
    public void generatePlayers(@PathVariable int count, @RequestParam(defaultValue = "true") boolean assignImage) {
        gameService.generatePlayers(count, assignImage);
    }

    @DeleteMapping("/players")
    public void deleteAllPlayers() {
        this.gameService.deleteAllPlayers();
    }

    @DeleteMapping("/players/{pseudo}")
    public void deletePlayer(@PathVariable String pseudo) {
        this.gameService.deletePlayer(pseudo);
    }

}
