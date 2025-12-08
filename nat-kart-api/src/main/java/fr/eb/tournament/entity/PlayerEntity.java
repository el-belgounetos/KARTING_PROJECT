package fr.eb.tournament.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JPA Entity representing a player in the karting game.
 * Data is persisted to H2 database.
 */
@Entity
@Table(name = "players")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 50)
    private String firstname;

    @Column(nullable = false)
    private Integer age;

    @Column(length = 100)
    private String email;

    @Column(nullable = false, unique = true, length = 30)
    private String pseudo;

    @Column(length = 100)
    private String picture;

    @Column(length = 50)
    private String category;

    @ManyToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private TeamEntity team;
}
