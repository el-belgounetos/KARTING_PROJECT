package fr.eb.tournament.controller;

import fr.eb.tournament.dto.RankingDTO;
import fr.eb.tournament.service.RankingService;
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
