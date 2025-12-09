package fr.eb.tournament.controller;

import fr.eb.tournament.service.CharacterService;
import fr.eb.tournament.service.ImageService;
import fr.eb.tournament.service.PlayerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    private final CharacterService characterService;
    private final PlayerService playerService;
    private final ImageService imageService;

    public CharacterController(
            CharacterService characterService,
            PlayerService playerService,
            ImageService imageService) {
        this.characterService = characterService;
        this.playerService = playerService;
        this.imageService = imageService;
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

    @PostMapping("/upload")
    public ResponseEntity<?> uploadCharacterImage(@RequestParam("file") MultipartFile file) {
        return imageService.handleImageUpload(file, "images/players", characterService::getAllCaracters);
    }

    @DeleteMapping("/{filename}")
    public ResponseEntity<?> deleteCharacterImage(@PathVariable String filename) {
        return imageService.handleImageDelete(
                filename,
                "images/players",
                characterService::getAllCaracters,
                () -> playerService.removePictureFromPlayers(filename));
    }
}
