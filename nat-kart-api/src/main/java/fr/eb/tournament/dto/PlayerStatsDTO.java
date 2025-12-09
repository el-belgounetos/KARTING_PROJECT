package fr.eb.tournament.dto;

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
