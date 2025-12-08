
package fr.eb.tournament.controller;

import fr.eb.tournament.dto.HistoryDTO;
import fr.eb.tournament.service.HistoryService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/history")
public class HistoryController {

    private final HistoryService historyService;

    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @GetMapping("/{playerName}")
    public List<HistoryDTO> getPlayerHistory(@PathVariable String playerName) {
        return this.historyService.getPlayerHistoryByPlayerName(playerName);
    }

    @GetMapping("/player/{playerId}")
    public List<HistoryDTO> getPlayerHistoryByPlayerId(@PathVariable Long playerId) {
        return this.historyService.getPlayerHistoryByPlayerId(playerId);
    }

    @PostMapping
    public void updatePlayerHistory(@Valid @RequestBody HistoryDTO history) {
        this.historyService.updatePlayerHistory(history);
    }

    @DeleteMapping("/{historyId}")
    public void deleteHistory(@PathVariable int historyId) {
        this.historyService.deleteHistoryById(historyId);
    }
}
