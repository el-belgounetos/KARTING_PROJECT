package com.example.nat_kart_api.controller;
import com.example.nat_kart_api.dto.ConsoleDTO;
import com.example.nat_kart_api.dto.CounterDTO;
import com.example.nat_kart_api.dto.HistoriqueDTO;
import com.example.nat_kart_api.dto.KarterDTO;
import com.example.nat_kart_api.service.NatFolder;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
public class NatController {

    private NatFolder folderService;

    public NatController(NatFolder folderService) {
        this.folderService = folderService;
    }

    @GetMapping("/personnages")
    public List<String> getAllCaracters() {
        return this.folderService.getAllCaracters();
    }

    @GetMapping("/personnages/exclude")
    public List<String> getAllExcludeCaracters() {
        return this.folderService.getExcludePool();
    }

    @GetMapping("/images/{fileName}")
    public Resource getImage(@PathVariable String fileName) {
        return this.getResourceFromPath(fileName, "images");
    }

    @GetMapping("/images/consoles/{fileName}")
    public Resource getImageConsole(@PathVariable String fileName) {
        return this.getResourceFromPath(fileName, "images-console");
    }

    @GetMapping("/images/cup/{consoleName}/{fileName}")
    public Resource getImageCupByConsole(@PathVariable String consoleName, @PathVariable String fileName) {
        return this.getResourceFromPath(fileName, "images-cups" + "/" + consoleName);
    }

    @PostMapping("/exclude/{name}")
    public List<String> excludeCaracterByName(@PathVariable String name) {
        return this.folderService.removeCaracter(name);
    }

    @PostMapping("/exclude/clear")
    public List<String> clearExcludeCaracters() {
        return this.folderService.resetExcludeList();
    }

    @PostMapping("/introduce/{name}")
    public List<String> introduceCaracter(@PathVariable String name) {
        return this.folderService.introduceCaracter(name);
    }

    @GetMapping("/ranks")
    public List<KarterDTO> getAllRanks() {
        return this.folderService.getAllRanks();
    }

    @PostMapping("/ranks")
    public void updateRank(@RequestBody KarterDTO player) {
        this.folderService.updatePointsByName(player.getName(), player.getPoints(), player.getVictory());
    }

    @GetMapping("/consoles")
    public List<ConsoleDTO> getAllConsoles() {
        return this.folderService.getAllConsole();
    }

    @GetMapping("/historique/{playerName}")
    public List<HistoriqueDTO> getPlayerHistorique(@PathVariable String playerName) {
        return this.folderService.getPlayerHistoriqueByPlayerName(playerName);
    }

    @PostMapping("/historique")
    public void updatePlayerHistorique(@RequestBody HistoriqueDTO historique) {
        this.folderService.updatePlayerHistorique(historique);
    }

    @DeleteMapping("/historique/{historiqueId}")
    public void getPlayerHistorique(@PathVariable int historiqueId) {
        this.folderService.deleteHistoriqueById(historiqueId);
    }

    @GetMapping("/counters")
    public List<CounterDTO> getAllCounters() {
        return this.folderService.getAllCounters();
    }

    @PostMapping("/counters")
    public void setAllCounters(@RequestBody List<CounterDTO> counters) {
        this.folderService.setAllCounters(counters);
    }

    private Resource getResourceFromPath(String filename, String path) {
        try {
            Path filePath = this.buildImagePath(path).resolve(filename);
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists() && Files.isReadable(filePath)) {
                return resource;
            } else {
                throw new RuntimeException("Le fichier n'existe pas ou n'est pas lisible !");
            }
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la récupération de l'image", e);
        }
    }

    private Path buildImagePath(String pathName) {
        return Paths.get(System.getProperty("user.dir")).getParent().resolve(pathName);
    }
}
