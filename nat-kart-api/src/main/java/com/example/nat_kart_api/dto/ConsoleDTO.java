package com.example.nat_kart_api.dto;

import java.util.List;

public class ConsoleDTO {

    private String name;
    private String picture;
    private List<CupsDTO> cups;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public List<CupsDTO> getCups() {
        return cups;
    }

    public void setCups(List<CupsDTO> cups) {
        this.cups = cups;
    }
}
