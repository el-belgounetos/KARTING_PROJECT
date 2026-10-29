package fr.eb.tournament.discipline;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

/**
 * Agnostic Theme and UI Terminology DTO for clients (Web, Mobile, OBS Overlays).
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DisciplineThemeDTO {
    private String disciplineId;
    private String displayName;
    private String roundLabel;
    private String stageLabel;
    private String participantLabel;
    private String metricLabel;
    private String scoreLabel;
    private String defaultIcon;
    private String primaryColor;
    private Map<String, String> customAttributes;
}
