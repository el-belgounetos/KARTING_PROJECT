package fr.eb.tournament.util;

import fr.eb.tournament.exception.ResourceNotFoundException;

import java.util.Optional;
import java.util.function.Supplier;

/**
 * Utility class for handling entity not found scenarios.
 * Provides standardized error messages and exception handling.
 */
public final class EntityNotFoundUtil {

    private EntityNotFoundUtil() {
        // Private constructor to prevent instantiation
        throw new UnsupportedOperationException("Utility class cannot be instantiated");
    }

    /**
     * Extracts value from Optional or throws ResourceNotFoundException with
     * standardized message.
     *
     * @param optional   The optional to check
     * @param entityName The name of the entity type (e.g., "Player", "Team")
     * @param id         The ID that was not found
     * @param <T>        The type of the entity
     * @return The value from the optional
     * @throws ResourceNotFoundException if optional is empty
     */
    public static <T> T findOrThrow(Optional<T> optional, String entityName, Object id) {
        return optional.orElseThrow(() -> new ResourceNotFoundException(entityName + " not found with id: " + id));
    }

    /**
     * Extracts value from Optional or throws ResourceNotFoundException with custom
     * message.
     *
     * @param optional The optional to check
     * @param message  The custom error message
     * @param <T>      The type of the entity
     * @return The value from the optional
     * @throws ResourceNotFoundException if optional is empty
     */
    public static <T> T findOrThrow(Optional<T> optional, String message) {
        return optional.orElseThrow(() -> new ResourceNotFoundException(message));
    }

    /**
     * Extracts value from Optional or throws ResourceNotFoundException with custom
     * supplier.
     *
     * @param optional          The optional to check
     * @param exceptionSupplier Supplier for the exception
     * @param <T>               The type of the entity
     * @return The value from the optional
     * @throws ResourceNotFoundException if optional is empty
     */
    public static <T> T findOrThrow(Optional<T> optional, Supplier<ResourceNotFoundException> exceptionSupplier) {
        return optional.orElseThrow(exceptionSupplier);
    }

    /**
     * Creates a standardized "not found" message.
     *
     * @param entityName The name of the entity type
     * @param id         The ID that was not found
     * @return Formatted error message
     */
    public static String notFoundMessage(String entityName, Object id) {
        return entityName + " not found with id: " + id;
    }

    /**
     * Creates a standardized ResourceNotFoundException.
     *
     * @param entityName The name of the entity type
     * @param id         The ID that was not found
     * @return ResourceNotFoundException with standardized message
     */
    public static ResourceNotFoundException notFoundException(String entityName, Object id) {
        return new ResourceNotFoundException(notFoundMessage(entityName, id));
    }
}
