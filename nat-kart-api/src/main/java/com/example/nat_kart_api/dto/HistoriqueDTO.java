package com.example.nat_kart_api.dto;

public class HistoriqueDTO {

    private KarterDTO player;
    private CupsDTO cups;
    private ConsoleDTO console;
    private int points;
    private boolean victory;
    private int id;

    public KarterDTO getPlayer() {
        return player;
    }

    public void setPlayer(KarterDTO player) {
        this.player = player;
    }

    public CupsDTO getCups() {
        return cups;
    }

    public void setCups(CupsDTO cups) {
        this.cups = cups;
    }

    public ConsoleDTO getConsole() {
        return console;
    }

    public void setConsole(ConsoleDTO console) {
        this.console = console;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isVictory() {
        return victory;
    }

    public void setVictory(boolean victory) {
        this.victory = victory;
    }
}
