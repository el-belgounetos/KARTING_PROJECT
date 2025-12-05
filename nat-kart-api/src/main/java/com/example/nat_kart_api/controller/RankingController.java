package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.KarterDTO;
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
    public List<KarterDTO> getAllRanks() {
        return this.rankingService.getAllRanks();
    }

    @PostMapping
    public void updateRank(@Valid @RequestBody KarterDTO player) {
        this.rankingService.updatePointsByPlayerId(
                player.getPlayerId(),
                player.getPoints(),
                player.getVictory());
    }
}
