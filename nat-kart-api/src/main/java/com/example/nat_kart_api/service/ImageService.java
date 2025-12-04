package com.example.nat_kart_api.service;

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
 */
@Service
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

        try (Stream<Path> paths = Files.walk(imagesPath)) {
            return paths.filter(Files::isRegularFile)
                    .filter(path -> !shouldExclude(path.getFileName().toString(), excludeList))
                    .map(path -> path.getFileName().toString())
                    .collect(Collectors.toList());
        } catch (IOException e) {
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
     *
     * @param picture The picture filename
     * @return The absolute path to the picture
     * @throws IOException if the path cannot be resolved
     */
    public String findMatchingPicture(String picture) throws IOException {
        String currentDir = System.getProperty("user.dir");
        Path parentDir = Paths.get(currentDir).getParent();
        Path imagesPath = parentDir.resolve("images");
        return imagesPath.toString() + "\\\\" + picture;
    }
}
