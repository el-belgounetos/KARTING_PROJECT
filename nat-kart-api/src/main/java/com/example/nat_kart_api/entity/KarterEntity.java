package com.example.nat_kart_api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JPA Entity representing a karter's ranking information.
 * Stores player scores, victories, and current rank position.
 */
@Entity
@Table(name = "karters")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class KarterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private Long playerId;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false)
    private Integer points = 0;

    @Column(nullable = false)
    private Integer victory = 0;

    @Column(length = 100)
    private String picture;

    @Column(length = 50)
    private String category;

    @Column(nullable = false)
    private Integer rank = 1;
}
