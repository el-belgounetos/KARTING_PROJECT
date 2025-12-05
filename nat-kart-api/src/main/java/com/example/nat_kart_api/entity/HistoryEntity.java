package com.example.nat_kart_api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

/**
 * JPA Entity representing a game history entry.
 * Stores information about a single game played by a player.
 */
@Entity
@Table(name = "history")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class HistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The player who played this game.
     * When a player is deleted, all their history entries are automatically deleted
     * (CASCADE).
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "player_id", nullable = false)
    @org.hibernate.annotations.OnDelete(action = org.hibernate.annotations.OnDeleteAction.CASCADE)
    private PlayerEntity player;

    /**
     * Console name used for this game.
     */
    @Column(length = 100)
    private String consoleName;

    /**
     * Console picture/icon.
     */
    @Column(length = 100)
    private String consolePicture;

    /**
     * Cup/track name played.
     */
    @Column(length = 100)
    private String cupName;

    /**
     * Cup/track picture/icon.
     */
    @Column(length = 100)
    private String cupPicture;

    /**
     * Points earned in this game.
     */
    @Column(nullable = false)
    private Integer points;

    /**
     * Whether this game was a victory.
     */
    @Column(nullable = false)
    private Boolean victory;

    /**
     * Timestamp when this game was recorded.
     */
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
