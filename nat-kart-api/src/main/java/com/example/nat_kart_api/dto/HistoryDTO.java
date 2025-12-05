package com.example.nat_kart_api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoryDTO {
    private int id;
    private RankingDTO player;
    private ConsoleDTO console;
    private CupsDTO cups;
    private int points;
    private boolean victory;
}
