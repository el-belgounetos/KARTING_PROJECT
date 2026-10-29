package fr.eb.tournament.discipline;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * REST Controller exposing game discipline and theme endpoints.
 */
@RestController
@RequestMapping("/api/disciplines")
@RequiredArgsConstructor
@Tag(name = "Discipline & Theme", description = "Endpoints for game-agnostic discipline terminology and themes")
public class DisciplineController {

    private final DisciplineService disciplineService;

    @GetMapping
    @Operation(summary = "List all supported disciplines and terminology themes")
    public ResponseEntity<List<DisciplineThemeDTO>> getAllDisciplines() {
        return ResponseEntity.ok(disciplineService.getAllThemes());
    }

    @GetMapping("/active")
    @Operation(summary = "Get current active tournament discipline theme")
    public ResponseEntity<DisciplineThemeDTO> getActiveDiscipline() {
        return ResponseEntity.ok(disciplineService.getActiveTheme());
    }

    @PostMapping("/active")
    @Operation(summary = "Change the active tournament discipline theme (e.g. switch to Fighting Game or Racing)")
    public ResponseEntity<DisciplineThemeDTO> switchDiscipline(@RequestBody Map<String, String> body) {
        String disciplineName = body.get("discipline");
        if (disciplineName != null) {
            try {
                Discipline discipline = Discipline.valueOf(disciplineName.toUpperCase());
                disciplineService.setActiveDiscipline(discipline);
                return ResponseEntity.ok(disciplineService.getActiveTheme());
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().build();
            }
        }
        return ResponseEntity.badRequest().build();
    }
}
