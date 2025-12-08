package fr.eb.tournament.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayerDTO {
    private Long id;

    @NotBlank(message = "Le nom est obligatoire")
    @Size(min = 2, max = 50, message = "Le nom doit contenir entre 2 et 50 caractères")
    private String name;

    @NotBlank(message = "Le prénom est obligatoire")
    @Size(min = 2, max = 50, message = "Le prénom doit contenir entre 2 et 50 caractères")
    private String firstname;

    @Min(value = 1, message = "L'âge doit être au minimum 1")
    @Max(value = 150, message = "L'âge doit être au maximum 150")
    private int age;

    @Email(message = "Email invalide")
    private String email;

    @NotBlank(message = "Le pseudo est obligatoire")
    @Size(min = 2, max = 30, message = "Le pseudo doit contenir entre 2 et 30 caractères")
    private String pseudo;

    private String picture;
    private String category;
    private String teamName;
    private Long teamId;
}
