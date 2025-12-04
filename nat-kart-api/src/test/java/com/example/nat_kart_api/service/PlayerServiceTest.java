package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.PlayerDTO;
import com.example.nat_kart_api.entity.PlayerEntity;
import com.example.nat_kart_api.repository.PlayerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

/**
 * Unit tests for PlayerService.
 */
@ExtendWith(MockitoExtension.class)
class PlayerServiceTest {

    @Mock
    private PlayerRepository playerRepository;

    @Mock
    private CharacterService characterService;

    @Mock
    private RankingService rankingService;

    @InjectMocks
    private PlayerService playerService;

    private PlayerDTO validPlayerDTO;

    @BeforeEach
    void setUp() {
        validPlayerDTO = new PlayerDTO();
        validPlayerDTO.setName("John");
        validPlayerDTO.setFirstname("Doe");
        validPlayerDTO.setPseudo("JohnD");
        validPlayerDTO.setEmail("john@test.com");
        validPlayerDTO.setAge(25);
        validPlayerDTO.setCategory("Expert");
        validPlayerDTO.setPicture("001.png");
    }

    @Test
    void createPlayer_withValidData_shouldAddPlayer() {
        // Given
        when(playerRepository.existsByPseudoIgnoreCase(validPlayerDTO.getPseudo())).thenReturn(false);

        PlayerEntity savedEntity = new PlayerEntity();
        savedEntity.setId(1L);
        savedEntity.setPseudo(validPlayerDTO.getPseudo());
        when(playerRepository.save(any(PlayerEntity.class))).thenReturn(savedEntity);

        // When
        playerService.createPlayer(validPlayerDTO);

        // Then
        verify(playerRepository).existsByPseudoIgnoreCase(validPlayerDTO.getPseudo());
        verify(playerRepository).save(any(PlayerEntity.class));
        verify(characterService).removeCaracter("001");
        verify(rankingService).createRankingEntry(1L);
        assertNotNull(validPlayerDTO.getId());
    }

    @Test
    void createPlayer_withDuplicatePseudo_shouldNotAddPlayer() {
        // Given
        when(playerRepository.existsByPseudoIgnoreCase(validPlayerDTO.getPseudo())).thenReturn(true);

        // When
        playerService.createPlayer(validPlayerDTO);

        // Then
        verify(playerRepository).existsByPseudoIgnoreCase(validPlayerDTO.getPseudo());
        verify(playerRepository, never()).save(any(PlayerEntity.class));
        verify(characterService, never()).removeCaracter(anyString());
        verify(rankingService, never()).createRankingEntry(anyLong());
    }

    @Test
    void deletePlayer_shouldRemovePlayerAndReleaseAvatar() {
        // Given
        String pseudo = "JohnD";
        PlayerEntity player = new PlayerEntity();
        player.setId(1L);
        player.setPseudo(pseudo);
        player.setPicture("001.png");

        when(playerRepository.findByPseudo(pseudo)).thenReturn(Optional.of(player));

        // When
        playerService.deletePlayer(pseudo);

        // Then
        verify(playerRepository).findByPseudo(pseudo);
        verify(characterService).introduceCaracter("001");
        verify(playerRepository).delete(player);
        verify(rankingService).deleteRankingEntry(pseudo);
    }

    @Test
    void deleteAllPlayers_shouldClearEverything() {
        // When
        playerService.deleteAllPlayers();

        // Then
        verify(playerRepository).deleteAll();
        verify(rankingService).clearRanking();
        verify(characterService).resetExcludeList();
    }
}
