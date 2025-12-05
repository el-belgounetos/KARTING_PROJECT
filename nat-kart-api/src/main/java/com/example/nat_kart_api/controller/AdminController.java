
package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.service.PlayerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final PlayerService playerService;

    public AdminController(PlayerService playerService) {
        this.playerService = playerService;
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
}
