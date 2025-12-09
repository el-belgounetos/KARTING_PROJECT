package fr.eb.tournament.service;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Abstract base service for managing exclusion logic for images (characters,
 * team logos, etc.).
 * Provides common functionality for excluding/including items from selection
 * pools.
 * 
 * @param <T> The repository type (must extend JpaRepository)
 */
public abstract class ExclusionService<T> {

    protected final List<String> excludeList = new CopyOnWriteArrayList<>();
    protected final List<String> excludedItems = new CopyOnWriteArrayList<>();
    protected final ImageService imageService;
    protected final T repository;

    protected ExclusionService(ImageService imageService, T repository) {
        this.imageService = imageService;
        this.repository = repository;
    }

    /**
     * Returns the folder path for images (e.g., "images/players", "images/team").
     */
    protected abstract String getImageFolder();

    /**
     * Returns the default exclusion item (e.g., "unknown" for players, null for
     * teams).
     */
    protected abstract String getDefaultExclusion();

    /**
     * Fetches all assigned items from the database.
     */
    protected abstract List<String> fetchAssignedItemsFromDatabase();

    /**
     * Post-construct initialization method.
     * Should be called with @PostConstruct in implementing classes.
     */
    protected void initialize() {
        this.resetExcludeList();
        this.rebuildExcludedItemsFromDatabase();
    }

    /**
     * Rebuilds the excluded items list from database on startup.
     * Queries all assigned items and adds them to exclusion lists.
     */
    protected void rebuildExcludedItemsFromDatabase() {
        List<String> assignedItems = fetchAssignedItemsFromDatabase();

        for (String item : assignedItems) {
            if (item == null || item.isEmpty()) {
                continue;
            }

            // Remove .png extension if present
            String itemWithoutExtension = item.replace(".png", "");

            if (!excludeList.contains(itemWithoutExtension)) {
                excludeList.add(itemWithoutExtension);
                excludedItems.add(itemWithoutExtension);
            }
        }
    }

    /**
     * Gets all available items (not excluded).
     *
     * @return List of available image filenames
     */
    public List<String> getAllItems() {
        return imageService.extractPicturesFromFolder(getImageFolder(), excludeList);
    }

    /**
     * Removes an item from the available pool (marks as used/excluded).
     *
     * @param itemName The item name to exclude
     * @return Updated list of excluded items
     */
    public List<String> removeItem(String itemName) {
        if (itemName != null && !itemName.isEmpty()) {
            String itemWithoutExtension = itemName.replace(".png", "");
            if (!excludeList.contains(itemWithoutExtension)) {
                excludeList.add(itemWithoutExtension);
                excludedItems.add(itemWithoutExtension);
            }
        }
        return getExcludePool();
    }

    /**
     * Re-introduces an item back into the available pool.
     *
     * @param name The item name to re-introduce
     * @return Updated list of excluded items
     */
    public List<String> introduceItem(String name) {
        if (name != null) {
            String itemWithoutExtension = name.replace(".png", "");
            excludeList.removeIf(item -> item.equals(itemWithoutExtension));
            excludedItems.removeIf(item -> item.equals(itemWithoutExtension));
        }
        return excludedItems;
    }

    /**
     * Gets the list of excluded items with .png extension.
     *
     * @return List of excluded item filenames
     */
    public List<String> getExcludePool() {
        return excludedItems.stream()
                .map(name -> name + ".png")
                .toList();
    }

    /**
     * Resets the exclusion list to default.
     *
     * @return List of all available items
     */
    public List<String> resetExcludeList() {
        excludeList.clear();
        excludedItems.clear();

        String defaultExclusion = getDefaultExclusion();
        if (defaultExclusion != null && !defaultExclusion.isEmpty()) {
            excludeList.add(defaultExclusion);
        }

        return getAllItems();
    }

    /**
     * Refreshes the exclusion list from the database.
     * Useful when configuration changes require reloading exclusions.
     */
    public void refresh() {
        resetExcludeList();
        rebuildExcludedItemsFromDatabase();
    }
}
