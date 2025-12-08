package com.example.nat_kart_api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Service responsible for managing the pool of available character avatars.
 * Handles exclusion and inclusion of characters from the selection pool.
 */
@Service
@RequiredArgsConstructor
public class CharacterService {

    private final ImageService imageService;
    private final com.example.nat_kart_api.repository.PlayerRepository playerRepository;

    private final List<String> excludeList = new CopyOnWriteArrayList<>();
    private final List<String> excludeCaracters = new CopyOnWriteArrayList<>();

    @jakarta.annotation.PostConstruct
    public void init() {
        this.resetExcludeList();
        this.rebuildExcludedAvatarsFromDatabase();
    }

    /**
     * Rebuild the excluded avatars list from database on startup.
     * Queries all assigned player pictures and adds them to exclusion lists.
     */
    private void rebuildExcludedAvatarsFromDatabase() {
        List<String> assignedPictures = playerRepository.findAllAssignedPictures();

        for (String picture : assignedPictures) {
            // Remove .png extension if present
            String pictureWithoutExtension = picture.replace(".png", "");

            if (!excludeList.contains(pictureWithoutExtension)) {
                excludeList.add(pictureWithoutExtension);
                excludeCaracters.add(pictureWithoutExtension);
            }
        }
    }

    /**
     * Gets all available character avatars (not excluded).
     *
     * @return List of available character image filenames
     */
    public List<String> getAllCaracters() {
        return imageService.extractPicturesFromFolder("images/players", excludeList);
    }

    /**
     * Removes a character from the available pool (marks as used).
     *
     * @param caracterName The character name to exclude
     * @return Updated list of excluded characters
     */
    public List<String> removeCaracter(String caracterName) {
        this.excludeList.add(caracterName);
        this.excludeCaracters.add(caracterName);
        return this.getExcludePool();
    }

    /**
     * Gets the list of excluded characters with .png extension.
     *
     * @return List of excluded character filenames
     */
    public List<String> getExcludePool() {
        return excludeCaracters.stream()
                .map(name -> name + ".png")
                .toList();
    }

    /**
     * Re-introduces a character back into the available pool.
     *
     * @param name The character name to re-introduce
     * @return Updated list of excluded characters
     */
    public List<String> introduceCaracter(String name) {
        excludeList.removeIf(item -> item.equals(name));
        excludeCaracters.removeIf(item -> item.equals(name));
        return excludeCaracters;
    }

    /**
     * Resets the exclusion list to default (only 'unknown' excluded).
     *
     * @return List of all available characters
     */
    public List<String> resetExcludeList() {
        excludeList.clear();
        excludeList.add("unknown");
        excludeCaracters.clear();
        return getAllCaracters();
    }
}
