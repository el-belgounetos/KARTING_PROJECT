package com.example.nat_kart_api.dto;

public class PlayerDTO {
    private Long id;
    private String name;
    private String firstname;
    private int age;
    private String email;
    private String pseudo;
    private String picture;
    private String category;

    public PlayerDTO() {
    }

    public PlayerDTO(Long id, String name, String firstname, int age, String email, String pseudo, String picture,
            String category) {
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.email = email;
        this.pseudo = pseudo;
        this.picture = picture;
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
