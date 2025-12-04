package com.example.nat_kart_api.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service responsible for managing the pool of available character avatars.
 * Handles exclusion and inclusion of characters from the selection pool.
 */
@Service
public class CharacterService {

    private final ImageService imageService;

    private List<String> excludeList;
    private List<String> excludeCaracters;

    public CharacterService(ImageService imageService) {
        this.imageService = imageService;
        this.resetExcludeList();
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
                .collect(Collectors.toList());
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
        excludeList = new ArrayList<>();
        excludeList.add("unknown");
        excludeCaracters = new ArrayList<>();
        return getAllCaracters();
    }
}
