package fr.eb.tournament.controller;

import fr.eb.tournament.service.CharacterService;
import fr.eb.tournament.service.PlayerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    private final CharacterService characterService;
    private final PlayerService playerService;

    public CharacterController(
            CharacterService characterService,
            PlayerService playerService) {
        this.characterService = characterService;
        this.playerService = playerService;
    }

    @GetMapping
    public List<String> getAllCharacters() {
        return this.characterService.getAllCaracters();
    }

    @GetMapping("/exclude")
    public List<String> getAllExcludedCharacters() {
        return this.characterService.getExcludePool();
    }

    @PostMapping("/exclude/{name}")
    public List<String> excludeCharacterByName(@PathVariable String name) {
        // Remove the picture from any players using it
        this.playerService.removePictureFromPlayers(name);
        // Then exclude it from the pool
        return this.characterService.removeCaracter(name);
    }

    @PostMapping("/exclude/clear")
    public List<String> clearExcludedCharacters() {
        return this.characterService.resetExcludeList();
    }

    @PostMapping("/include/{name}")
    public List<String> includeCharacter(@PathVariable String name) {
        return this.characterService.introduceCaracter(name);
    }
}
