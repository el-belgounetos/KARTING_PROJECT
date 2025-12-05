package com.example.nat_kart_api.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RankingDTO {
    private Long playerId;

    @NotBlank(message = "Le nom est obligatoire")
    private String name;

    @Min(value = 0, message = "Les points ne peuvent pas être négatifs")
    private int points;

    @Min(value = 0, message = "Les victoires ne peuvent pas être négatives")
    private int victory;

    private String picture;
    private String category;

    @Min(value = 1, message = "Le rang doit être au minimum 1")
    private int rank; // Position dans le classement
}
