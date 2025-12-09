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
    private final TournamentConfigService tournamentConfigService;

    public CharacterService(
            ImageService imageService,
            fr.eb.tournament.repository.PlayerRepository playerRepository,
            TournamentConfigService tournamentConfigService) {
        super(imageService, playerRepository);
        this.playerRepository = playerRepository;
        this.tournamentConfigService = tournamentConfigService;
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
        // Check tournament configuration for image reuse
        fr.eb.tournament.dto.TournamentConfigDTO config = tournamentConfigService.getConfig();
        if (config != null && Boolean.TRUE.equals(config.getAllowPlayerImageReuse())) {
            // If reuse is allowed, return empty list (no exclusions)
            log.debug("Player image reuse is enabled - allowing all images to be reused");
            return List.of();
        }
        // Otherwise, exclude already assigned images
        log.debug("Player image reuse is disabled - excluding assigned images");
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

    // Override to check configuration before excluding/including items
    @Override
    public List<String> removeItem(String itemName) {
        fr.eb.tournament.dto.TournamentConfigDTO config = tournamentConfigService.getConfig();
        if (config != null && Boolean.TRUE.equals(config.getAllowPlayerImageReuse())) {
            // If reuse is allowed, don't exclude the item
            log.debug("Player image reuse is enabled - not excluding: {}", itemName);
            return getExcludePool();
        }
        // Otherwise, exclude as normal
        return super.removeItem(itemName);
    }

    @Override
    public List<String> introduceItem(String name) {
        fr.eb.tournament.dto.TournamentConfigDTO config = tournamentConfigService.getConfig();
        if (config != null && Boolean.TRUE.equals(config.getAllowPlayerImageReuse())) {
            // If reuse is allowed, items are never excluded, so nothing to re-introduce
            log.debug("Player image reuse is enabled - no need to re-introduce: {}", name);
            return excludedItems;
        }
        // Otherwise, re-introduce as normal
        return super.introduceItem(name);
    }

    // getExcludePool() and resetExcludeList() are inherited from ExclusionService
}
