package com.example.nat_kart_api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayerStatsDTO {
    private long totalPlayers;
    private long playersWithAvatar;
    private long playersWithoutAvatar;
}
