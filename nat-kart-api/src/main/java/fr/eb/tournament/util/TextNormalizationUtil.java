package fr.eb.tournament.util;

import java.text.Normalizer;

/**
 * Utility class for text normalization operations.
 * Provides methods for removing accents, normalizing spaces, and creating
 * search-friendly strings.
 */
public final class TextNormalizationUtil {

    private TextNormalizationUtil() {
        // Private constructor to prevent instantiation
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    /**
     * Normalizes text for strict matching (no accents, no spaces, lowercase).
     * Used for team names, player names etc. during import/matching.
     * 
     * Example: "Équipe N°1" → "equipen°1"
     *
     * @param text The text to normalize
     * @return Normalized text (no accents, no spaces, lowercase), or null if input
     *         is null
     */
    public static String normalize(String text) {
        if (text == null) {
            return null;
        }

        // Remove accents (NFD normalization + remove diacritical marks)
        String normalized = Normalizer.normalize(text, Normalizer.Form.NFD);
        normalized = normalized.replaceAll("\\p{M}", "");

        // Remove all whitespace and convert to lowercase
        normalized = normalized.replaceAll("\\s+", "").toLowerCase();

        return normalized;
    }

    /**
     * Normalizes text for search (no accents, single spaces, lowercase).
     * Preserves spaces for better readability in search contexts.
     * 
     * Example: "Équipe N°1" → "equipe n°1"
     *
     * @param text The text to normalize
     * @return Normalized text (no accents, single spaces, lowercase), or null if
     *         input is null
     */
    public static String normalizeForSearch(String text) {
        if (text == null) {
            return null;
        }

        // Remove accents
        String normalized = removeAccents(text);

        // Replace multiple spaces with single space and trim
        normalized = normalized.replaceAll("\\s+", " ").trim().toLowerCase();

        return normalized;
    }

    /**
     * Removes accents from text while preserving case and spaces.
     * 
     * Example: "Café" → "Cafe"
     *
     * @param text The text to process
     * @return Text without accents, or null if input is null
     */
    public static String removeAccents(String text) {
        if (text == null) {
            return null;
        }

        String normalized = Normalizer.normalize(text, Normalizer.Form.NFD);
        return normalized.replaceAll("\\p{M}", "");
    }

    /**
     * Creates a URL-friendly slug from text.
     * Removes accents, converts to lowercase, replaces spaces/special chars with
     * hyphens.
     * 
     * Example: "Équipe N°1" → "equipe-n-1"
     *
     * @param text The text to slugify
     * @return URL-friendly slug, or null if input is null
     */
    public static String slugify(String text) {
        if (text == null) {
            return null;
        }

        // Remove accents and convert to lowercase
        String slug = removeAccents(text).toLowerCase();

        // Replace spaces and non-alphanumeric characters with hyphens
        slug = slug.replaceAll("[^a-z0-9]+", "-");

        // Remove leading/trailing hyphens
        slug = slug.replaceAll("^-+|-+$", "");

        return slug;
    }

    /**
     * Removes all whitespace from text.
     * 
     * Example: "Hello World" → "HelloWorld"
     *
     * @param text The text to process
     * @return Text without any whitespace, or null if input is null
     */
    public static String removeWhitespace(String text) {
        if (text == null) {
            return null;
        }
        return text.replaceAll("\\s+", "");
    }

    /**
     * Trims and collapses multiple spaces into single spaces.
     * 
     * Example: "Hello World " → "Hello World"
     *
     * @param text The text to process
     * @return Text with normalized whitespace, or null if input is null
     */
    public static String normalizeWhitespace(String text) {
        if (text == null) {
            return null;
        }
        return text.replaceAll("\\s+", " ").trim();
    }
}
