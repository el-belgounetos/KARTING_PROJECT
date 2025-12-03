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
public class GameService {

    private List<String> excludeList;
    private List<String> excludeCaracters;
    private List<KarterDTO> ranks = new ArrayList<>();
    private List<HistoriqueDTO> playerHistorique = new ArrayList<>();
    private List<CounterDTO> counters = new ArrayList<>();
    private List<PlayerDTO> players = new ArrayList<>();
    private int id = 1; // For player IDs
    private int historiqueId = 1; // For historique IDs

    public GameService() {
        this.resetExcludeList();
        this.buildAllCountersByConsoles();
    }

    public List<String> getAllCaracters() {
        return this.extractPicturesFromFolder("images/players");
    }

    public List<ConsoleDTO> getAllConsole() {
        List<ConsoleDTO> result = new ArrayList<>();
        List<String> consolesPictures = this.extractPicturesFromFolder("images/consoles");
        for (String picture : consolesPictures) {
            ConsoleDTO console = new ConsoleDTO();
            console.setPicture(picture);
            console.setName(this.formatPictureName(picture, "/images/consoles/"));
            console.setCups(new ArrayList<>());
            List<String> consoleCups = this.extractPicturesFromFolder("images/cups/" + console.getName());
            for (String cup : consoleCups) {
                CupsDTO cupDTO = new CupsDTO();
                cupDTO.setPicture(cup);
                cupDTO.setName(this.formatPictureName(cup, "/images/cups/" + console.getName() + "/"));
                console.getCups().add(cupDTO);
            }
            result.add(console);
        }
        return result;
    }

    public void buildAllCountersByConsoles() {
        List<ConsoleDTO> consoles = this.getAllConsole();
        for (ConsoleDTO console : consoles) {
            this.counters.add(new CounterDTO(0, console.getName()));
        }
    }

    public List<CounterDTO> getAllCounters() {
        return this.counters;
    }

    public void setAllCounters(List<CounterDTO> dto) {
        this.counters = dto;
    }

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
                // Also update category from player data
                for (PlayerDTO player : players) {
                    if (player.getName().equals(name)) {
                        karter.setCategory(player.getCategory());
                        break;
                    }
                }
                this.rerankEveryone();
                return; // Quitte la boucle après mise à jour
            }
        }
    }

    public void updatePlayerHistorique(HistoriqueDTO historiqueDTO) {
        historiqueDTO.setId(this.historiqueId);
        System.out.println("[DEBUG] Saving history entry #" + this.historiqueId + " for player: " +
                (historiqueDTO.getPlayer() != null ? historiqueDTO.getPlayer().getName() : "NULL"));
        this.playerHistorique.add(historiqueDTO);
        this.historiqueId++;
        System.out.println("[DEBUG] Total history entries: " + this.playerHistorique.size());
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
            // Retourner une liste complète des chemins relatifs (ou absolus) des fichiers
            // images
            return paths.filter(Files::isRegularFile) // Filtrer uniquement les fichiers
                    .filter(path -> !shouldExclude(path.getFileName().toString(), excludeList)) // Exclure les fichiers
                                                                                                // correspondant à la
                                                                                                // liste
                    .map(path -> path.getFileName().toString()) // Construire des URLs relatives
                    .collect(Collectors.toList()); // Retourner la liste des noms de fichiers
        } catch (IOException e) {
            return List.of(); // Retourner une liste vide en cas d'erreur
        }
    }

    private String formatPictureName(String picturePath, String path) {
        return picturePath.replace(path, "").replace(".png", "");
    }

    public List<HistoriqueDTO> getPlayerHistoriqueByPlayerName(String playerName) {
        System.out.println("[DEBUG] Getting history for player: " + playerName);
        System.out.println("[DEBUG] Total history entries in memory: " + this.playerHistorique.size());
        List<HistoriqueDTO> result = this.playerHistorique
                .stream()
                .filter(histo -> histo.getPlayer().getName().equals(playerName))
                .toList();
        System.out.println("[DEBUG] Found " + result.size() + " entries for " + playerName);
        return result;
    }

    public void deleteHistoriqueById(int id) {
        this.playerHistorique.forEach(dto -> {
            if (dto.getId() == id) {
                int victoryToRemove = dto.isVictory() ? -1 : 0;
                this.ranks.forEach(player -> {
                    if (player != null && Objects.equals(player.getName(), dto.getPlayer().getName())) {
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
        return imagesPath.toString() + "\\" + picture;
    }

    public List<HistoriqueDTO> getPlayerHistorique() {
        return playerHistorique;
    }

    public List<PlayerDTO> getAllPlayers() {
        return this.players;
    }

    public void updatePlayer(PlayerDTO playerDTO) {
        System.out.println(
                "[DEBUG] updatePlayer called for ID: " + playerDTO.getId() + ", Category: " + playerDTO.getCategory());

        for (PlayerDTO player : this.players) {
            if (player.getId().equals(playerDTO.getId())) {
                System.out.println("[DEBUG] Found player to update: " + player.getName());

                player.setName(playerDTO.getName());
                player.setFirstname(playerDTO.getFirstname());
                player.setAge(playerDTO.getAge());
                player.setEmail(playerDTO.getEmail());
                player.setCategory(playerDTO.getCategory());

                // Update category in ranking using playerId
                boolean karterFound = false;
                for (KarterDTO karter : this.ranks) {
                    if (karter.getPlayerId() != null && karter.getPlayerId().equals(playerDTO.getId())) {
                        System.out.println("[DEBUG] Updating category in ranking for playerId " + playerDTO.getId()
                                + " from '" + karter.getCategory() + "' to '" + playerDTO.getCategory() + "'");
                        karter.setCategory(playerDTO.getCategory());
                        karterFound = true;
                        break;
                    }
                }
                if (!karterFound) {
                    System.out
                            .println("[DEBUG] WARNING: Karter not found in ranking for playerId: " + playerDTO.getId());
                }
                break;
            }
        }
        System.out.println("[DEBUG] updatePlayer completed");
    }

    public void createPlayer(PlayerDTO player) {
        // Check for duplicates
        boolean exists = this.players.stream()
                .anyMatch(p -> p.getPseudo().equalsIgnoreCase(player.getPseudo()));
        if (exists) {
            return;
        }

        // Auto-assign ID
        player.setId((long) id++);

        this.players.add(player);

        // Remove picture from pool if selected
        if (player.getPicture() != null && !player.getPicture().isEmpty()) {
            this.removeCaracter(player.getPicture().replace(".png", ""));
        }

        KarterDTO newKarter = new KarterDTO();
        newKarter.setPlayerId(player.getId()); // ✅ Set player ID reference
        // Use pseudo if available, otherwise name
        String displayName = (player.getPseudo() != null && !player.getPseudo().isEmpty()) ? player.getPseudo()
                : player.getName();
        newKarter.setName(displayName);
        newKarter.setPicture(player.getPicture());
        newKarter.setCategory(player.getCategory());
        newKarter.setPoints(0);
        newKarter.setVictory(0);

        // Add to ranks and rerank
        this.ranks.add(newKarter);
        this.rerankEveryone();
    }

    public void deleteAllPlayers() {
        this.players.clear();
        this.ranks.clear();
        this.resetExcludeList();
    }

    public void deletePlayer(String pseudo) {
        // Find player to get picture
        Optional<PlayerDTO> playerOpt = this.players.stream()
                .filter(p -> p.getPseudo().equals(pseudo))
                .findFirst();

        if (playerOpt.isPresent()) {
            PlayerDTO player = playerOpt.get();
            // Re-introduce picture to pool if it exists
            if (player.getPicture() != null && !player.getPicture().isEmpty()) {
                this.introduceCaracter(player.getPicture().replace(".png", ""));
            }
        }

        this.players.removeIf(p -> p.getPseudo().equals(pseudo));
        this.ranks.removeIf(k -> k.getName().equals(pseudo));
        this.rerankEveryone();
    }

    public void generatePlayers(int count, boolean assignImage) {
        int startIdx = this.players.size() + 1;
        for (int i = 0; i < count; i++) {
            int currentIdx = startIdx + i;
            PlayerDTO player = new PlayerDTO();
            player.setName("Player_" + currentIdx); // Use underscore for consistency
            player.setFirstname("Test");
            player.setAge(20 + currentIdx);
            player.setEmail("player" + currentIdx + "@test.com");
            player.setPseudo("Player_" + currentIdx);
            player.setCategory(""); // Empty category by default

            if (assignImage) {
                // Try to find an available picture
                List<String> available = this.getAllCaracters();

                if (!available.isEmpty()) {
                    player.setPicture(available.get(0));
                }
            }

            this.createPlayer(player);
        }
    }
}
