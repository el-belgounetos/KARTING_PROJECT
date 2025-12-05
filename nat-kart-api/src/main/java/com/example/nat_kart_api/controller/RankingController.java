package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.RankingDTO;
import com.example.nat_kart_api.service.RankingService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ranks")
public class RankingController {

    private final RankingService rankingService;

    public RankingController(RankingService rankingService) {
        this.rankingService = rankingService;
    }

    @GetMapping
    public List<RankingDTO> getAllRanks() {
        return this.rankingService.getAllRanks();
    }

    @SuppressWarnings("null")
    @PostMapping
    public void updateRank(@Valid @RequestBody RankingDTO player) {
        this.rankingService.updatePointsByPlayerId(
                player.getPlayerId(),
                player.getPoints(),
                player.getVictory());
    }
}
