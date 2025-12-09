package fr.eb.tournament.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * Configuration properties for image upload.
 * Values are loaded from application.yml under 'image.upload' prefix.
 */
@Data
@Component
@ConfigurationProperties(prefix = "image.upload")
public class ImageUploadProperties {

    /**
     * Maximum file size accepted in MB (hard limit).
     * Files larger than this are rejected.
     */
    private int maxSizeMb;

    /**
     * Files larger than this threshold (in MB) will be compressed.
     */
    private int compressionThresholdMb;

    /**
     * Target size in MB after compression.
     */
    private int targetSizeMb;

    /**
     * Get max size in bytes.
     */
    public long getMaxSizeBytes() {
        return maxSizeMb * 1024L * 1024L;
    }

    /**
     * Get compression threshold in bytes.
     */
    public long getCompressionThresholdBytes() {
        return compressionThresholdMb * 1024L * 1024L;
    }

    /**
     * Get target size in bytes.
     */
    public long getTargetSizeBytes() {
        return targetSizeMb * 1024L * 1024L;
    }
}
