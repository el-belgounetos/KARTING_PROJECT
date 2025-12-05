
package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.PlayerDTO;
import com.example.nat_kart_api.service.PlayerService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return ResponseEntity.ok(this.playerService.getAllPlayers());
    }

    @PostMapping
    @SuppressWarnings("null")
    public ResponseEntity<Void> createPlayer(@Valid @RequestBody PlayerDTO player) {
        this.playerService.createPlayer(player);
        return ResponseEntity.status(201).build(); // 201 Created
    }

    @PutMapping
    public ResponseEntity<Void> updatePlayer(@NonNull @Valid @RequestBody PlayerDTO player) {
        this.playerService.updatePlayer(player);
        return ResponseEntity.ok().build(); // 200 OK
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllPlayers() {
        this.playerService.deleteAllPlayers();
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    @DeleteMapping("/{pseudo}")
    public ResponseEntity<Void> deletePlayer(@PathVariable String pseudo) {
        this.playerService.deletePlayer(pseudo);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}
