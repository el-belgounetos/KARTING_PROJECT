package fr.eb.tournament.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JPA Entity representing a player's ranking in the tournament.
 * Links to PlayerEntity for player information (name, picture, category).
 */
@Entity
@Table(name = "rankings")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RankingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The player this ranking belongs to.
     * One player can only have one ranking (unique constraint).
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "player_id", nullable = false, unique = true)
    private PlayerEntity player;

    @Column(nullable = false)
    private Integer points = 0;

    @Column(nullable = false)
    private Integer victory = 0;

    @Column(nullable = false)
    private Integer rank = 0;
}
