package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.KarterDTO;
import com.example.nat_kart_api.entity.KarterEntity;
import com.example.nat_kart_api.repository.KarterRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service responsible for managing player rankings, points, and victories.
 * Handles automatic re-ranking after point updates.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RankingService {

    private final KarterRepository karterRepository;

    /**
     * Converts KarterEntity to KarterDTO.
     */
    private KarterDTO toDTO(KarterEntity entity) {
        KarterDTO dto = new KarterDTO();
        dto.setPlayerId(entity.getPlayerId());
        dto.setName(entity.getName());
        dto.setPoints(entity.getPoints());
        dto.setVictory(entity.getVictory());
        dto.setPicture(entity.getPicture());
        dto.setCategory(entity.getCategory());
        dto.setRank(entity.getRank());
        return dto;
    }

    /**
     * Converts KarterDTO to KarterEntity.
     */
    private KarterEntity toEntity(KarterDTO dto) {
        KarterEntity entity = new KarterEntity();
        entity.setPlayerId(dto.getPlayerId());
        entity.setName(dto.getName());
        entity.setPoints(dto.getPoints());
        entity.setVictory(dto.getVictory());
        entity.setPicture(dto.getPicture());
        entity.setCategory(dto.getCategory());
        entity.setRank(dto.getRank());
        return entity;
    }

    /**
     * Gets all player rankings.
     *
     * @return List of karter DTOs with ranking information
     */
    public List<KarterDTO> getAllRanks() {
        return karterRepository.findAllByOrderByPointsDesc().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    /**
     * Updates points and victories for a player by name.
     * Also synchronizes category from player data.
     *
     * @param name      The player name
     * @param newPoints The new points total
     * @param victory   The new victory count
     * @param category  The player's category
     */
    @Transactional
    public void updatePointsByName(String name, int newPoints, int victory, String category) {
        Optional<KarterEntity> karterOpt = karterRepository.findByName(name);
        if (karterOpt.isPresent()) {
            KarterEntity karter = karterOpt.get();
            karter.setPoints(newPoints);
            karter.setVictory(victory);
            karter.setCategory(category);
            karterRepository.save(karter);
            this.rerankEveryone();
        }
    }

    /**
     * Creates a new ranking entry for a player.
     *
     * @param playerId Player's unique ID
     * @param name     Player's display name (pseudo)
     * @param picture  Player's avatar filename
     * @param category Player's category
     */
    @Transactional
    public void createRankingEntry(Long playerId, String name, String picture, String category) {
        KarterEntity newKarter = new KarterEntity();
        newKarter.setPlayerId(playerId);
        newKarter.setName(name);
        newKarter.setPicture(picture);
        newKarter.setCategory(category);
        newKarter.setPoints(0);
        newKarter.setVictory(0);
        newKarter.setRank(1);

        karterRepository.save(newKarter);
        this.rerankEveryone();
    }

    /**
     * Deletes a ranking entry by player name.
     *
     * @param name The player name to remove from rankings
     */
    @Transactional
    public void deleteRankingEntry(String name) {
        karterRepository.deleteByName(name);
        this.rerankEveryone();
    }

    /**
     * Clears all ranking entries.
     */
    @Transactional
    public void clearRanking() {
        karterRepository.deleteAll();
    }

    /**
     * Updates the category for a player by their ID.
     *
     * @param playerId    The player's ID
     * @param newCategory The new category value
     * @return true if player was found and updated, false otherwise
     */
    @Transactional
    public boolean updateCategoryByPlayerId(Long playerId, String newCategory) {
        Optional<KarterEntity> karterOpt = karterRepository.findByPlayerId(playerId);
        if (karterOpt.isPresent()) {
            KarterEntity karter = karterOpt.get();
            karter.setCategory(newCategory);
            karterRepository.save(karter);
            return true;
        }
        return false;
    }

    /**
     * Updates the picture (avatar) for a player by their ID.
     *
     * @param playerId   The player's ID
     * @param newPicture The new picture filename
     * @return true if player was found and updated, false otherwise
     */
    @Transactional
    public boolean updatePictureByPlayerId(Long playerId, String newPicture) {
        Optional<KarterEntity> karterOpt = karterRepository.findByPlayerId(playerId);
        if (karterOpt.isPresent()) {
            KarterEntity karter = karterOpt.get();
            log.debug("Updating picture in ranking for playerId {} from '{}' to '{}'", playerId,
                    karter.getPicture(), newPicture);
            karter.setPicture(newPicture);
            karterRepository.save(karter);
            return true;
        }
        return false;
    }

    /**
     * Re-ranks all players based on their points (descending order).
     * Assigns rank numbers (1st, 2nd, 3rd, etc.).
     */
    @Transactional
    private void rerankEveryone() {
        List<KarterEntity> allKarters = karterRepository.findAllByOrderByPointsDesc();

        for (int i = 0; i < allKarters.size(); i++) {
            KarterEntity karter = allKarters.get(i);
            karter.setRank(i + 1);
            karterRepository.save(karter);
        }
    }
}
