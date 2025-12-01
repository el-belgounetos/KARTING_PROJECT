package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.*;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class NatFolder {

    private List<String> excludeList;
    private List<String> excludeCaracters;
    private List<KarterDTO> ranks = new ArrayList<>();
    private List<HistoriqueDTO> playerHistorique = new ArrayList<>();
    private List<CounterDTO> counters = new ArrayList<>();
    private int id = 1;

    public NatFolder() {

        this.resetExcludeList();
        List<String> names = this.getAllCaracters();
        for(String name: names) {
            KarterDTO dto = new KarterDTO();
            dto.setPicture(name);
            dto.setName(this.formatPictureName(name, "/images/"));
            dto.setPoints(0);
            dto.setRank(0);
            ranks.add(dto);
        }

        this.buildAllCountersByConsoles();
    }

    public List<String> getAllCaracters() {
        return this.extractPicturesFromFolder("images");
    }

    public List<ConsoleDTO> getAllConsole() {
        List<ConsoleDTO> result = new ArrayList<>();
        List<String> consolesPictures = this.extractPicturesFromFolder("images-console");
        for(String picture: consolesPictures) {
            ConsoleDTO console = new ConsoleDTO();
            console.setPicture(picture);
            console.setName(this.formatPictureName(picture, "/images-console/"));
            console.setCups(new ArrayList<>());
            List<String> consoleCups = this.extractPicturesFromFolder("images-cups/" + console.getName());
            for(String cup: consoleCups) {
                CupsDTO cupDTO = new CupsDTO();
                cupDTO.setPicture(cup);
                cupDTO.setName(this.formatPictureName(cup, "/images-cups/" + console.getName() + "/"));
                console.getCups().add(cupDTO);
            }
            result.add(console);
        }
        return result;
    }

    public void buildAllCountersByConsoles() {
        List<ConsoleDTO> consoles = this.getAllConsole();
        for(ConsoleDTO console: consoles) {
            this.counters.add(new CounterDTO(0,console.getName()));
        }
    }

    public List<CounterDTO> getAllCounters() { return this.counters;}
    public void setAllCounters(List<CounterDTO> dto) { this.counters = dto;}

    private boolean shouldExclude(String fileName, List<String> excludeList) {
        String lowerCaseFileName = fileName.toLowerCase();
        return excludeList.stream().anyMatch(lowerCaseFileName::contains);
    }

    public List<String> removeCaracter(String caracterName) {
        this.excludeList.add(caracterName);
        this.excludeCaracters.add(caracterName);
        return this.getExcludePool();
    }

    public List<String> getExcludePool() {
        return excludeCaracters.stream()
                .map(name -> name + ".png")
                .collect(Collectors.toList());
    }

    public List<String> introduceCaracter(String name) {
        excludeList.removeIf(item -> item.equals(name));
        excludeCaracters.removeIf(item -> item.equals(name));
        return excludeCaracters;
    }

    public List<String> resetExcludeList() {
        excludeList = new ArrayList<>();
        excludeList.add("unknown");
        excludeCaracters = new ArrayList<>();
        return getAllCaracters();
    }

    public List<KarterDTO> getAllRanks() {
        return this.ranks;
    }

    public void updatePointsByName(String name, int newPoints, int victory) {
        for (KarterDTO karter : ranks) {
            if (karter.getName().equals(name)) {
                karter.setPoints(newPoints);
                karter.setVictory(victory);
                this.rerankEveryone();
                return; // Quitte la boucle après mise à jour
            }
        }
    }

    public void updatePlayerHistorique(HistoriqueDTO historiqueDTO) {
        historiqueDTO.setId(this.id);
        this.playerHistorique.add(historiqueDTO);
        this.id++;
    }

    private void rerankEveryone() {
        ranks.sort((karter1, karter2) -> Integer.compare(karter2.getPoints(), karter1.getPoints()));

        // Assigner un rang à chaque participant, du premier au dernier
        for (int i = 0; i < ranks.size(); i++) {
            ranks.get(i).setRank(i + 1); // Le premier dans la liste a le rang 1, le second a le rang 2, etc.
        }
    }

    private List<String> extractPicturesFromFolder(String pathFile) {
        String currentDir = System.getProperty("user.dir");
        Path parentDir = Paths.get(currentDir).getParent();
        Path imagesPath = parentDir.resolve(pathFile);

        // Liste de chaînes de caractères à exclure


        try (Stream<Path> paths = Files.walk(imagesPath)) {
            // Retourner une liste complète des chemins relatifs (ou absolus) des fichiers images
            return paths.filter(Files::isRegularFile) // Filtrer uniquement les fichiers
                    .filter(path -> !shouldExclude(path.getFileName().toString(), excludeList)) // Exclure les fichiers correspondant à la liste
                    .map(path -> path.getFileName().toString()) // Construire des URLs relatives
                    .collect(Collectors.toList()); // Retourner la liste des noms de fichiers
        } catch (IOException e) {
            return List.of(); // Retourner une liste vide en cas d'erreur
        }
    }

    private String formatPictureName(String picturePath, String path) {
        return picturePath.replace(path, "").replace(".png","");
    }

    public List<HistoriqueDTO> getPlayerHistoriqueByPlayerName(String playerName) {
        return this.playerHistorique
                .stream()
                .filter(histo -> histo.getPlayer().getName().equals(playerName))
                .toList();
    }

    public void deleteHistoriqueById(int id) {
        this.playerHistorique.forEach(dto -> {
            if(dto.getId() == id) {
                int victoryToRemove = dto.isVictory() ? -1 : 0;
                this.ranks.forEach(player -> {
                    if(player != null && Objects.equals(player.getName(), dto.getPlayer().getName())) {
                        player.setPoints(player.getPoints() - dto.getPoints());
                        player.setVictory(player.getVictory() + victoryToRemove);
                    }
                });
            }
        });
        this.playerHistorique.removeIf(historique -> historique.getId() == id);
        this.rerankEveryone();
    }

    public String findMatchingPicture(String picture) throws IOException {
        String currentDir = System.getProperty("user.dir");
        Path parentDir = Paths.get(currentDir).getParent();
        Path imagesPath = parentDir.resolve("images");
        return imagesPath.toString() +"\\" +  picture;
    }

    public List<HistoriqueDTO> getPlayerHistorique() {
        return playerHistorique;
    }
}
