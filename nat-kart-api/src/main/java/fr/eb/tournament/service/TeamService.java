package fr.eb.tournament.service;

import fr.eb.tournament.dto.PlayerDTO;
import fr.eb.tournament.dto.TeamDTO;
import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.entity.TeamEntity;
import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.repository.TeamRepository;
import fr.eb.tournament.mapper.TeamMapper;
import fr.eb.tournament.mapper.PlayerMapper;
import fr.eb.tournament.util.EntityNotFoundUtil;
import fr.eb.tournament.util.TextNormalizationUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;
    private final TeamMapper teamMapper;
    private final PlayerMapper playerMapper;

    public static String normalizeTeamName(String name) {
        return TextNormalizationUtil.normalize(name);
    }

    private TeamEntity findTeamById(Long id) {
        return EntityNotFoundUtil.findOrThrow(teamRepository.findById(id), "Team", id);
    }

    public List<TeamDTO> getAllTeams() {
        return teamRepository.findAll().stream()
                .map(this::mapToDtoWithCount)
                .toList();
    }

    public TeamDTO createTeam(TeamDTO teamDTO) {
        // Check if team with same name already exists
        if (teamRepository.existsByName(teamDTO.getName())) {
            throw new IllegalArgumentException("Une équipe avec ce nom existe déjà");
        }

        TeamEntity teamEntity = new TeamEntity();
        teamEntity.setName(teamDTO.getName());
        teamEntity.setLogo(teamDTO.getLogo());

        TeamEntity savedTeam = teamRepository.save(teamEntity);
        return mapToDtoWithCount(savedTeam);
    }

    public java.util.Optional<TeamDTO> updateTeam(Long id, TeamDTO teamDTO) {
        return teamRepository.findById(id).map(teamEntity -> {
            // Check if another team has the same name
            teamRepository.findByName(teamDTO.getName()).ifPresent(existingTeam -> {
                if (!existingTeam.getId().equals(id)) {
                    throw new IllegalArgumentException("Une autre équipe avec ce nom existe déjà");
                }
            });

            teamEntity.setName(teamDTO.getName());
            teamEntity.setLogo(teamDTO.getLogo());

            TeamEntity updatedTeam = teamRepository.save(teamEntity);
            return mapToDtoWithCount(updatedTeam);
        });
    }

    private TeamDTO mapToDtoWithCount(TeamEntity entity) {
        TeamDTO dto = teamMapper.toDTO(entity);
        dto.setPlayerCount(playerRepository.countByTeamId(entity.getId()));
        return dto;
    }

    public void deleteTeam(Long id) {
        TeamEntity teamEntity = findTeamById(id);

        // Check if team has associated players
        List<PlayerEntity> players = playerRepository.findByTeamId(id);
        if (!players.isEmpty()) {
            String playerNames = players.stream()
                    .map(PlayerEntity::getPseudo)
                    .collect(Collectors.joining(", "));
            throw new IllegalStateException("Impossible de supprimer l'équipe car elle contient encore " +
                    players.size() + " joueur(s): " + playerNames);
        }

        teamRepository.delete(teamEntity);
    }

    public List<PlayerDTO> getPlayersByTeamId(Long teamId) {
        if (!teamRepository.existsById(teamId)) {
            throw EntityNotFoundUtil.notFoundException("Team", teamId);
        }
        return playerRepository.findByTeamId(teamId).stream()
                .map(playerMapper::toDTO)
                .toList();
    }

    public java.util.Optional<TeamDTO> getTeamById(Long id) {
        return teamRepository.findById(id)
                .map(this::mapToDtoWithCount);
    }

    /**
     * Find or create team by name (for import functionality).
     */
    public TeamEntity findOrCreateByName(String name) {
        return teamRepository.findByName(name)
                .orElseGet(() -> {
                    TeamEntity newTeam = new TeamEntity();
                    newTeam.setName(name);
                    return teamRepository.save(newTeam);
                });
    }

}
