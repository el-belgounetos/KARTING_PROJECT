package fr.eb.tournament.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service responsible for managing the pool of available character avatars.
 * Handles exclusion and inclusion of characters from the selection pool.
 */
@Service
@Slf4j
public class CharacterService extends ExclusionService<fr.eb.tournament.repository.PlayerRepository> {

    private final fr.eb.tournament.repository.PlayerRepository playerRepository;

    public CharacterService(
            ImageService imageService,
            fr.eb.tournament.repository.PlayerRepository playerRepository) {
        super(imageService, playerRepository);
        this.playerRepository = playerRepository;
    }

    @jakarta.annotation.PostConstruct
    public void init() {
        this.initialize();
    }

    @Override
    protected String getImageFolder() {
        return "images/players";
    }

    @Override
    protected String getDefaultExclusion() {
        return "unknown";
    }

    @Override
    protected List<String> fetchAssignedItemsFromDatabase() {
        return playerRepository.findAllAssignedPictures();
    }

    // ========== Public API methods (for backward compatibility) ==========

    /**
     * Gets all available character avatars (not excluded).
     *
     * @return List of available character image filenames
     */
    public List<String> getAllCaracters() {
        return getAllItems();
    }

    /**
     * Removes a character from the available pool (marks as used).
     *
     * @param caracterName The character name to exclude
     * @return Updated list of excluded characters
     */
    public List<String> removeCaracter(String caracterName) {
        return removeItem(caracterName);
    }

    /**
     * Re-introduces a character back into the available pool.
     *
     * @param name The character name to re-introduce
     * @return Updated list of excluded characters
     */
    public List<String> introduceCaracter(String name) {
        return introduceItem(name);
    }

    // getExcludePool() and resetExcludeList() are inherited from ExclusionService
}
