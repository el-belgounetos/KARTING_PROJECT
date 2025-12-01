package com.example.nat_kart_api.dto;

public class CounterDTO {

    public int nConsole;
    public String console;

    public CounterDTO(int nConsole, String console) {
        this.nConsole = nConsole;
        this.console = console;
    }

    public int getnConsole() {
        return nConsole;
    }

    public void setnConsole(int nConsole) {
        this.nConsole = nConsole;
    }

    public String getConsole() {
        return console;
    }

    public void setConsole(String console) {
        this.console = console;
    }
}
