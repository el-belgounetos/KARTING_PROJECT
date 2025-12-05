
package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.HistoryDTO;
import com.example.nat_kart_api.service.HistoryService;
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

    @PostMapping
    public void updatePlayerHistory(@Valid @RequestBody HistoryDTO history) {
        this.historyService.updatePlayerHistory(history);
    }

    @DeleteMapping("/{historyId}")
    public void deleteHistory(@PathVariable int historyId) {
        this.historyService.deleteHistoryById(historyId);
    }
}
