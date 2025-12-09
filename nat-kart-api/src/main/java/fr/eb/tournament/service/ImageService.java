package fr.eb.tournament.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import fr.eb.tournament.config.ImageUploadProperties;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Stream;

/**
 * Service responsible for image file management.
 * Handles scanning directories and providing lists of available image files.
 * Includes security validation to prevent Path Traversal attacks.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ImageService {

    private final ImageUploadProperties uploadProperties;

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
                    .toList();

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
     * Saves an uploaded image file to the specified folder.
     * Validates file format (PNG, JPEG, JPG), size (max 5MB), and checks for
     * duplicates.
     *
     * @param file   The uploaded file
     * @param folder The target folder (e.g., "images/players" or "images/team")
     * @return The saved filename
     * @throws IOException              if file cannot be saved
     * @throws IllegalArgumentException if validation fails
     */
    public String saveImage(org.springframework.web.multipart.MultipartFile file, String folder) throws IOException {
        // Validate file is not null or empty
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("Le fichier ne peut pas être vide");
        }

        long fileSize = file.getSize();
        long maxSize = uploadProperties.getMaxSizeBytes();
        long compressionThreshold = uploadProperties.getCompressionThresholdBytes();
        long targetSize = uploadProperties.getTargetSizeBytes();

        // Reject files larger than max size
        if (fileSize > maxSize) {
            throw new IllegalArgumentException(
                    "La taille du fichier ne doit pas dépasser " + uploadProperties.getMaxSizeMb() + "MB");
        }

        // Get original filename and validate
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || originalFilename.trim().isEmpty()) {
            throw new IllegalArgumentException("Nom de fichier invalide");
        }

        // Validate file extension
        String lowerFilename = originalFilename.toLowerCase();
        if (!lowerFilename.endsWith(".png") && !lowerFilename.endsWith(".jpg") && !lowerFilename.endsWith(".jpeg")) {
            throw new IllegalArgumentException("Format de fichier non supporté. Formats acceptés : PNG, JPEG, JPG");
        }

        // Sanitize filename to prevent path traversal
        validateFileName(originalFilename);
        String sanitizedFilename = originalFilename.replaceAll("[^a-zA-Z0-9._-]", "_");

        // Resolve target directory
        String currentDir = System.getProperty("user.dir");
        Path parentDir = Paths.get(currentDir).getParent();
        Path targetDir = parentDir.resolve(folder);

        // Create directory if it doesn't exist
        if (!Files.exists(targetDir)) {
            Files.createDirectories(targetDir);
        }

        // Check for duplicate
        Path targetPath = targetDir.resolve(sanitizedFilename);
        if (Files.exists(targetPath)) {
            throw new IllegalArgumentException("Un fichier avec ce nom existe déjà. Veuillez renommer votre fichier.");
        }

        // Save or compress the file
        try {
            if (fileSize > targetSize) {
                // File is between 5MB and 10MB - compress it
                log.info("Compressing image {} from {}MB to under 5MB", sanitizedFilename,
                        fileSize / (1024.0 * 1024.0));
                compressAndSaveImage(file, targetPath, targetSize);
            } else {
                // File is under 5MB - save directly
                file.transferTo(targetPath.toFile());
            }

            log.info("Image saved successfully: {}", targetPath);
            return sanitizedFilename;
        } catch (IOException e) {
            log.error("Error saving image: {}", e.getMessage());
            throw new IOException("Erreur lors de l'enregistrement du fichier", e);
        }
    }

    /**
     * Compresses an image to be under the target size using Thumbnailator.
     * Iteratively reduces quality (JPEG) or dimensions (PNG) until file is under
     * target.
     *
     * @param file       The uploaded file
     * @param targetPath The destination path
     * @param targetSize The maximum target size in bytes
     * @throws IOException if compression fails
     */
    private void compressAndSaveImage(org.springframework.web.multipart.MultipartFile file, Path targetPath,
            long targetSize) throws IOException {
        try {
            String filename = targetPath.getFileName().toString().toLowerCase();
            boolean isPNG = filename.endsWith(".png");

            double quality = 0.9;
            double scale = 1.0;
            int maxAttempts = 10;

            for (int attempt = 0; attempt < maxAttempts; attempt++) {
                java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();

                if (isPNG) {
                    // For PNG: reduce dimensions
                    net.coobird.thumbnailator.Thumbnails.of(file.getInputStream())
                            .scale(scale)
                            .outputFormat("png")
                            .toOutputStream(baos);
                } else {
                    // For JPEG: reduce quality while keeping original size
                    net.coobird.thumbnailator.Thumbnails.of(file.getInputStream())
                            .scale(1.0)
                            .outputQuality(quality)
                            .outputFormat("jpg")
                            .toOutputStream(baos);
                }

                byte[] compressed = baos.toByteArray();

                // Check if we've reached target size or minimum thresholds
                if (compressed.length <= targetSize ||
                        (isPNG && scale <= 0.3) ||
                        (!isPNG && quality <= 0.1)) {
                    Files.write(targetPath, compressed);
                    log.info("Image compressed to {} bytes (quality: {}, scale: {})",
                            compressed.length, quality, scale);
                    return;
                }

                // Reduce quality/scale for next iteration
                quality -= 0.1;
                scale -= 0.1;
            }

            log.warn("Could not compress image below target size after {} attempts", maxAttempts);
        } catch (Exception e) {
            log.error("Error compressing image with Thumbnailator: {}", e.getMessage());
            // Fallback: save original if compression fails
            file.transferTo(targetPath.toFile());
        }
    }

    /**
     * Deletes an image file from the specified folder.
     *
     * @param filename The filename to delete
     * @param folder   The folder containing the file (e.g., "images/players")
     * @return true if file was deleted, false if file didn't exist
     * @throws IOException              if deletion fails
     * @throws IllegalArgumentException if filename is invalid
     */
    public boolean deleteImage(String filename, String folder) throws IOException {
        // Validate filename
        validateFileName(filename);

        // Resolve file path
        String currentDir = System.getProperty("user.dir");
        Path parentDir = Paths.get(currentDir).getParent();
        Path targetPath = parentDir.resolve(folder).resolve(filename);

        // Check if file exists
        if (!Files.exists(targetPath)) {
            log.warn("File not found for deletion: {}", targetPath);
            return false;
        }

        // Delete file
        try {
            Files.delete(targetPath);
            log.info("Image deleted successfully: {}", targetPath);
            return true;
        } catch (IOException e) {
            log.error("Error deleting image: {}", e.getMessage());
            throw new IOException("Erreur lors de la suppression du fichier", e);
        }
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

    /**
     * Handles image upload with standard error handling and response formatting.
     * This method is shared between CharacterController and TeamController.
     *
     * @param file         The uploaded file
     * @param folder       The target folder (e.g., "images/players" or
     *                     "images/team")
     * @param listProvider Function to get updated list after save
     * @return ResponseEntity with updated list or error
     */
    public org.springframework.http.ResponseEntity<?> handleImageUpload(
            org.springframework.web.multipart.MultipartFile file,
            String folder,
            java.util.function.Supplier<List<String>> listProvider) {
        try {
            saveImage(file, folder);
            List<String> updatedList = listProvider.get();
            return org.springframework.http.ResponseEntity.ok(updatedList);
        } catch (IllegalArgumentException e) {
            return org.springframework.http.ResponseEntity.badRequest()
                    .body(java.util.Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return org.springframework.http.ResponseEntity
                    .status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(java.util.Map.of("error", "Erreur lors de l'upload du fichier"));
        }
    }

    /**
     * Handles image deletion with standard error handling and response formatting.
     * This method is shared between CharacterController and TeamController.
     *
     * @param filename         The filename to delete
     * @param folder           The target folder
     * @param listProvider     Function to get updated list after deletion
     * @param onDeleteCallback Optional callback after successful deletion (e.g., to
     *                         update related entities)
     * @return ResponseEntity with updated list or error
     */
    public org.springframework.http.ResponseEntity<?> handleImageDelete(
            String filename,
            String folder,
            java.util.function.Supplier<List<String>> listProvider,
            Runnable onDeleteCallback) {
        try {
            boolean deleted = deleteImage(filename, folder);
            if (deleted) {
                if (onDeleteCallback != null) {
                    onDeleteCallback.run();
                }
                List<String> updatedList = listProvider.get();
                return org.springframework.http.ResponseEntity.ok(updatedList);
            } else {
                return org.springframework.http.ResponseEntity.notFound().build();
            }
        } catch (IllegalArgumentException e) {
            return org.springframework.http.ResponseEntity.badRequest()
                    .body(java.util.Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return org.springframework.http.ResponseEntity
                    .status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(java.util.Map.of("error", "Erreur lors de la suppression du fichier"));
        }
    }
}
