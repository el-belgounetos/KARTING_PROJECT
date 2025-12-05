package com.example.nat_kart_api.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Service responsible for image file management.
 * Handles scanning directories and providing lists of available image files.
 * Includes security validation to prevent Path Traversal attacks.
 */
@Service
@Slf4j
public class ImageService {

    /**
     * Extracts all picture files from a specified folder.
     *
     * @param pathFile    Relative path to the images folder (e.g.,
     *                    "images/players")
     * @param excludeList List of filenames or patterns to exclude
     * @return List of image filenames found in the folder
     */
    public List<String> extractPicturesFromFolder(String pathFile, List<String> excludeList) {
        String currentDir = System.getProperty("user.dir");
        Path parentDir = Paths.get(currentDir).getParent();
        Path imagesPath = parentDir.resolve(pathFile);

        log.debug("Scanning folder: {}", imagesPath);

        try (Stream<Path> paths = Files.walk(imagesPath)) {
            List<String> images = paths.filter(Files::isRegularFile)
                    .filter(path -> !shouldExclude(path.getFileName().toString(), excludeList))
                    .map(path -> path.getFileName().toString())
                    .collect(Collectors.toList());

            log.debug("Found {} images in {}", images.size(), pathFile);
            return images;
        } catch (IOException e) {
            log.error("Error scanning folder {}: {}", pathFile, e.getMessage());
            return List.of(); // Return empty list on error
        }
    }

    /**
     * Checks if a filename should be excluded based on the exclude list.
     *
     * @param fileName    The filename to check
     * @param excludeList List of patterns to exclude
     * @return true if the file should be excluded, false otherwise
     */
    private boolean shouldExclude(String fileName, List<String> excludeList) {
        String lowerCaseFileName = fileName.toLowerCase();
        return excludeList.stream().anyMatch(lowerCaseFileName::contains);
    }

    /**
     * Formats a picture name by removing path prefix and extension.
     *
     * @param picturePath The full picture path
     * @param path        The path prefix to remove
     * @return The formatted picture name
     */
    public String formatPictureName(String picturePath, String path) {
        return picturePath.replace(path, "").replace(".png", "");
    }

    /**
     * Finds the absolute path for a given picture filename.
     * Validates filename to prevent Path Traversal attacks.
     *
     * @param picture The picture filename
     * @return The absolute path to the picture
     * @throws IOException              if the path cannot be resolved
     * @throws IllegalArgumentException if the filename is invalid
     */
    public String findMatchingPicture(String picture) throws IOException {
        // Security: Validate filename to prevent Path Traversal
        validateFileName(picture);

        String currentDir = System.getProperty("user.dir");
        Path parentDir = Paths.get(currentDir).getParent();
        Path imagesPath = parentDir.resolve("images").resolve("players");

        // Use File.separator for cross-platform compatibility
        Path fullPath = imagesPath.resolve(picture);

        if (!Files.exists(fullPath)) {
            log.warn("Image not found: {}", fullPath);
            return null;
        }

        log.debug("Resolved picture path: {}", fullPath);
        return fullPath.toString();
    }

    /**
     * Validates a filename to prevent Path Traversal attacks.
     * Rejects filenames containing "..", "/", or "\".
     *
     * @param fileName The filename to validate
     * @throws IllegalArgumentException if the filename is invalid
     */
    private void validateFileName(String fileName) {
        if (fileName == null || fileName.trim().isEmpty()) {
            throw new IllegalArgumentException("Filename cannot be null or empty");
        }

        if (fileName.contains("..") || fileName.contains("/") || fileName.contains("\\")) {
            log.warn("Rejected potentially malicious filename: {}", fileName);
            throw new IllegalArgumentException("Invalid filename: " + fileName);
        }
    }
}
