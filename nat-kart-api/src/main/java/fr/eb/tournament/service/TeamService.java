package fr.eb.tournament.service;

import com.github.javafaker.Faker;
import fr.eb.tournament.dto.PlayerDTO;
import fr.eb.tournament.dto.TeamDTO;
import fr.eb.tournament.dto.TeamStatsDTO;
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
import java.util.Locale;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeamService {

    private final TeamRepository teamRepository;
    private final PlayerRepository playerRepository;
    private final TeamMapper teamMapper;
    private final PlayerMapper playerMapper;
    private final TeamLogoService teamLogoService;

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

        // Remove logo from pool if selected (same as PlayerService pattern)
        if (savedTeam.getLogo() != null && !savedTeam.getLogo().isEmpty()) {
            teamLogoService.removeLogo(savedTeam.getLogo().replace(".png", ""));
        }

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

            // Handle logo change (same as PlayerService pattern)
            String oldLogo = teamEntity.getLogo();
            String newLogo = teamDTO.getLogo();

            if (oldLogo != null && !oldLogo.equals(newLogo)) {
                // Release old logo back to pool
                teamLogoService.introduceLogo(oldLogo.replace(".png", ""));
            }

            if (newLogo != null && !newLogo.isEmpty() && !newLogo.equals(oldLogo)) {
                // Reserve new logo
                teamLogoService.removeLogo(newLogo.replace(".png", ""));
            }

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

        // Re-introduce logo to pool if it exists (same as PlayerService pattern)
        if (teamEntity.getLogo() != null && !teamEntity.getLogo().isEmpty()) {
            teamLogoService.introduceLogo(teamEntity.getLogo().replace(".png", ""));
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

    /**
     * Removes a logo from all teams that are using it.
     * Used when a logo is excluded from the pool.
     * (Same pattern as PlayerService.removePictureFromPlayers)
     */
    @org.springframework.transaction.annotation.Transactional
    public void removeLogoFromTeams(String logoName) {
        if (logoName == null || logoName.isEmpty()) {
            return;
        }

        String logoWithExtension = logoName.endsWith(".png") ? logoName : logoName + ".png";
        String logoWithoutExtension = logoName.replace(".png", "");

        teamRepository.removeLogoFromAll(logoWithoutExtension, logoWithExtension);
    }

    /**
     * Generate random teams with optional logo assignment.
     * Similar to PlayerService.generatePlayers.
     *
     * @param count      number of teams to generate
     * @param assignLogo whether to assign logos to teams
     */
    @org.springframework.transaction.annotation.Transactional
    public void generateTeams(int count, boolean assignLogo) {
        if (count < 1 || count > 50) {
            throw new IllegalArgumentException("Le nombre d'équipes doit être entre 1 et 50");
        }

        Faker faker = new Faker(Locale.FRENCH);
        List<String> availableLogos = assignLogo ? teamLogoService.getAvailableLogos() : List.of();
        int logoIndex = 0;

        for (int i = 0; i < count; i++) {
            TeamEntity team = new TeamEntity();

            // Generate unique team name
            String baseName;
            int attempt = 0;
            do {
                // Use various Faker methods to create interesting team names
                String prefix = switch (i % 5) {
                    case 0 -> faker.team().name();
                    case 1 -> faker.esports().team();
                    case 2 -> faker.superhero().name() + " Team";
                    case 3 -> "Les " + faker.color().name();
                    default -> faker.ancient().hero() + " Squad";
                };
                baseName = attempt == 0 ? prefix : prefix + " " + attempt;
                attempt++;
            } while (teamRepository.existsByName(baseName) && attempt < 100);

            team.setName(baseName);

            // Assign logo if requested and available
            if (assignLogo && !availableLogos.isEmpty() && logoIndex < availableLogos.size()) {
                String logo = availableLogos.get(logoIndex);
                team.setLogo(logo);
                teamLogoService.removeLogo(logo.replace(".png", ""));
                logoIndex++;
            }

            teamRepository.save(team);
        }
    }

    /**
     * Delete all teams from the database.
     * Releases all logos back to the pool.
     */
    @org.springframework.transaction.annotation.Transactional
    public void deleteAllTeams() {
        List<TeamEntity> teams = teamRepository.findAll();

        // Check if any team has players
        for (TeamEntity team : teams) {
            List<PlayerEntity> players = playerRepository.findByTeamId(team.getId());
            if (!players.isEmpty()) {
                throw new IllegalStateException(
                        "Impossible de supprimer toutes les équipes car certaines contiennent encore des joueurs. " +
                                "Veuillez d'abord supprimer ou déplacer les joueurs.");
            }
        }

        // Re-introduce all logos to pool
        for (TeamEntity team : teams) {
            if (team.getLogo() != null && !team.getLogo().isEmpty()) {
                teamLogoService.introduceLogo(team.getLogo().replace(".png", ""));
            }
        }

        teamRepository.deleteAll();
    }

    /**
     * Get statistics about teams.
     *
     * @return TeamStatsDTO with team counts
     */
    public TeamStatsDTO getTeamStats() {
        long totalTeams = teamRepository.count();
        long teamsWithLogo = teamRepository.countByLogoIsNotNullAndLogoNot("");
        long teamsWithoutLogo = totalTeams - teamsWithLogo;

        return new TeamStatsDTO(totalTeams, teamsWithLogo, teamsWithoutLogo);
    }
}
