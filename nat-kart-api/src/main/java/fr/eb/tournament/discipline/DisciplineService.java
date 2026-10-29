package fr.eb.tournament.discipline;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;

/**
 * Service managing active game discipline and theme descriptors.
 * SOLID (SRP): Manages active event discipline state and converts disciplines to DTOs.
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
        return DisciplineThemeDTO.builder()
                .disciplineId(discipline.name())
                .displayName(discipline.getDisplayName())
                .roundLabel(discipline.getRoundLabel())
                .stageLabel(discipline.getStageLabel())
                .participantLabel(discipline.getParticipantLabel())
                .metricLabel(discipline.getMetricLabel())
                .scoreLabel(discipline.getScoreLabel())
                .defaultIcon(discipline.getDefaultIcon())
                .primaryColor(discipline.getPrimaryColor())
                .customAttributes(Map.of(
                        "bannerTheme", discipline.name().toLowerCase()
                ))
                .build();
    }
}
