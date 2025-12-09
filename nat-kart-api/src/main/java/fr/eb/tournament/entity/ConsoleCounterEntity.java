package fr.eb.tournament.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JPA Entity representing console selection counter.
 * Tracks how many times each console has been selected.
 */
@Entity
@Table(name = "console_counters")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConsoleCounterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer selectionCount = 0;

    @Column(nullable = false, unique = true, length = 50)
    private String consoleName;
}
