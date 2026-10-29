package fr.eb.tournament.discipline;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;

/**
 * Service managing active game discipline and theme descriptors.
 */
@Service
public class DisciplineService {

    private final AtomicReference<Discipline> activeDiscipline = new AtomicReference<>(Discipline.RACING);

    public Discipline getActiveDiscipline() {
        return activeDiscipline.get();
    }

    public void setActiveDiscipline(Discipline discipline) {
        if (discipline != null) {
            activeDiscipline.set(discipline);
        }
    }

    public DisciplineThemeDTO getActiveTheme() {
        return toDTO(activeDiscipline.get());
    }

    public List<DisciplineThemeDTO> getAllThemes() {
        return Arrays.stream(Discipline.values())
                .map(this::toDTO)
                .toList();
    }

    private DisciplineThemeDTO toDTO(Discipline discipline) {
        String icon = switch (discipline) {
            case RACING -> "pi pi-flag";
            case VERSUS_FIGHTING -> "pi pi-bolt";
            case SPORTS -> "pi pi-trophy";
            case CUSTOM -> "pi pi-star";
        };

        String color = switch (discipline) {
            case RACING -> "#EF4444";
            case VERSUS_FIGHTING -> "#8B5CF6";
            case SPORTS -> "#10B981";
            case CUSTOM -> "#3B82F6";
        };

        return DisciplineThemeDTO.builder()
                .disciplineId(discipline.name())
                .displayName(discipline.getDisplayName())
                .roundLabel(discipline.getRoundLabel())
                .stageLabel(discipline.getStageLabel())
                .participantLabel(discipline.getParticipantLabel())
                .metricLabel(discipline.getMetricLabel())
                .scoreLabel(discipline.getScoreLabel())
                .defaultIcon(icon)
                .primaryColor(color)
                .customAttributes(Map.of(
                        "bannerTheme", discipline.name().toLowerCase()
                ))
                .build();
    }
}
