package fr.eb.tournament.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeamDTO {
    private Long id;

    @NotBlank(message = "Le nom de l'équipe est obligatoire")
    @Size(min = 2, max = 40, message = "Le nom doit contenir entre 2 et 40 caractères")
    private String name;

    private String logo;
    private long playerCount;

    // Normalized name for import matching (no accents, no spaces)
    private String normalizedName;
}
