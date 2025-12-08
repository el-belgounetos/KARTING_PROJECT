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

    /**
     * Normalize team name for import matching.
     * Delegates to TextNormalizationUtil for consistency.
     */
    public static String normalizeTeamName(String name) {
        return TextNormalizationUtil.normalize(name);
    }

    public List<TeamDTO> getAllTeams() {
        return teamRepository.findAll().stream()
                .map(entity -> {
                    TeamDTO dto = teamMapper.toDTO(entity);
                    dto.setPlayerCount(playerRepository.countByTeamId(entity.getId()));
                    return dto;
                })
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
        TeamDTO dto = teamMapper.toDTO(savedTeam);
        dto.setPlayerCount(playerRepository.countByTeamId(savedTeam.getId()));
        return dto;
    }

    public TeamDTO updateTeam(Long id, TeamDTO teamDTO) {
        TeamEntity teamEntity = EntityNotFoundUtil.findOrThrow(
                teamRepository.findById(id),
                "Team",
                id);

        // Check if another team has the same name
        teamRepository.findByName(teamDTO.getName()).ifPresent(existingTeam -> {
            if (!existingTeam.getId().equals(id)) {
                throw new IllegalArgumentException("Une autre équipe avec ce nom existe déjà");
            }
        });

        teamEntity.setName(teamDTO.getName());
        teamEntity.setLogo(teamDTO.getLogo());

        TeamEntity updatedTeam = teamRepository.save(teamEntity);
        TeamDTO dto = teamMapper.toDTO(updatedTeam);
        dto.setPlayerCount(playerRepository.countByTeamId(updatedTeam.getId()));
        return dto;
    }

    public void deleteTeam(Long id) {
        TeamEntity teamEntity = EntityNotFoundUtil.findOrThrow(
                teamRepository.findById(id),
                "Team",
                id);

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

    public TeamDTO getTeamById(Long id) {
        TeamEntity teamEntity = EntityNotFoundUtil.findOrThrow(
                teamRepository.findById(id),
                "Team",
                id);
        TeamDTO dto = teamMapper.toDTO(teamEntity);
        dto.setPlayerCount(playerRepository.countByTeamId(teamEntity.getId()));
        return dto;
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
