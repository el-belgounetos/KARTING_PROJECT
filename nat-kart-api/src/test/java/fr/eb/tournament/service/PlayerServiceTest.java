package fr.eb.tournament.service;

import fr.eb.tournament.dto.PlayerDTO;
import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.mapper.PlayerMapper;
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

    @Mock
    private HistoryService historyService;

    @Mock
    private TournamentConfigService tournamentConfigService;

    @Mock
    private PlayerMapper playerMapper;

    @Mock
    private fr.eb.tournament.repository.TeamRepository teamRepository;

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

        // Mock PlayerMapper to return a valid entity
        PlayerEntity mappedEntity = new PlayerEntity();
        mappedEntity.setPseudo(validPlayerDTO.getPseudo());
        mappedEntity.setName(validPlayerDTO.getName());
        mappedEntity.setFirstname(validPlayerDTO.getFirstname());
        mappedEntity.setEmail(validPlayerDTO.getEmail());
        mappedEntity.setAge(validPlayerDTO.getAge());
        mappedEntity.setCategory(validPlayerDTO.getCategory());
        mappedEntity.setPicture(validPlayerDTO.getPicture());
        when(playerMapper.toEntity(any(PlayerDTO.class))).thenReturn(mappedEntity);

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
        verify(rankingService).clearRanking();
        verify(historyService).deleteAllHistory();
        verify(playerRepository).deleteAll();
        verify(characterService).resetExcludeList();
    }
}
