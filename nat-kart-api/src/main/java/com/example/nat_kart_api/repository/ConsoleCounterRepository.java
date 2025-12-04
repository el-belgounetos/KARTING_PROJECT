package com.example.nat_kart_api.repository;

import com.example.nat_kart_api.entity.ConsoleCounterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data JPA repository for ConsoleCounter entities.
 */
@Repository
public interface ConsoleCounterRepository extends JpaRepository<ConsoleCounterEntity, Long> {

    /**
     * Find a counter by console name.
     * 
     * @param consoleName The console name
     * @return Optional containing the counter if found
     */
    Optional<ConsoleCounterEntity> findByConsoleName(String consoleName);
}
