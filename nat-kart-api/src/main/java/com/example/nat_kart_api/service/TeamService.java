package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.PlayerDTO;
import com.example.nat_kart_api.dto.TeamDTO;
import com.example.nat_kart_api.entity.PlayerEntity;
import com.example.nat_kart_api.entity.TeamEntity;
import com.example.nat_kart_api.repository.PlayerRepository;
import com.example.nat_kart_api.repository.TeamRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private PlayerRepository playerRepository;

    /**
     * Normalize team name for import matching.
     * Removes accents and spaces, converts to lowercase.
     */
    public static String normalizeTeamName(String name) {
        if (name == null)
            return null;

        // Remove accents
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        normalized = normalized.replaceAll("\\p{M}", "");

        // Remove spaces and convert to lowercase
        normalized = normalized.replaceAll("\\s+", "").toLowerCase();

        return normalized;
    }

    public List<TeamDTO> getAllTeams() {
        return teamRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
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
        return convertToDTO(savedTeam);
    }

    public TeamDTO updateTeam(Long id, TeamDTO teamDTO) {
        TeamEntity teamEntity = teamRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Team not found with id: " + id));

        // Check if another team has the same name
        teamRepository.findByName(teamDTO.getName()).ifPresent(existingTeam -> {
            if (!existingTeam.getId().equals(id)) {
                throw new IllegalArgumentException("Une autre équipe avec ce nom existe déjà");
            }
        });

        teamEntity.setName(teamDTO.getName());
        teamEntity.setLogo(teamDTO.getLogo());

        TeamEntity updatedTeam = teamRepository.save(teamEntity);
        return convertToDTO(updatedTeam);
    }

    public void deleteTeam(Long id) {
        TeamEntity teamEntity = teamRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Team not found with id: " + id));

        // Check if team has associated players
        List<PlayerEntity> players = playerRepository.findByTeamId(id);
        if (!players.isEmpty()) {
            String playerNames = players.stream()
                    .map(p -> p.getPseudo())
                    .collect(Collectors.joining(", "));
            throw new IllegalStateException("Impossible de supprimer l'équipe car elle contient encore " +
                    players.size() + " joueur(s): " + playerNames);
        }

        teamRepository.delete(teamEntity);
    }

    public List<PlayerDTO> getPlayersByTeamId(Long teamId) {
        if (!teamRepository.existsById(teamId)) {
            throw new EntityNotFoundException("Team not found with id: " + teamId);
        }
        return playerRepository.findByTeamId(teamId).stream()
                .map(this::convertPlayerToDTO)
                .collect(Collectors.toList());
    }

    public TeamDTO getTeamById(Long id) {
        TeamEntity teamEntity = teamRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Team not found with id: " + id));
        return convertToDTO(teamEntity);
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

    private TeamDTO convertToDTO(TeamEntity teamEntity) {
        TeamDTO dto = new TeamDTO();
        dto.setId(teamEntity.getId());
        dto.setName(teamEntity.getName());
        dto.setLogo(teamEntity.getLogo());
        dto.setNormalizedName(normalizeTeamName(teamEntity.getName()));
        // Calculate player count
        dto.setPlayerCount(playerRepository.countByTeamId(teamEntity.getId()));
        return dto;
    }

    private PlayerDTO convertPlayerToDTO(PlayerEntity player) {
        PlayerDTO dto = new PlayerDTO();
        dto.setId(player.getId());
        dto.setName(player.getName());
        dto.setFirstname(player.getFirstname());
        dto.setAge(player.getAge());
        dto.setEmail(player.getEmail());
        dto.setPseudo(player.getPseudo());
        dto.setPicture(player.getPicture());
        dto.setCategory(player.getCategory());
        if (player.getTeam() != null) {
            dto.setTeamName(player.getTeam().getName());
            dto.setTeamId(player.getTeam().getId());
        }
        return dto;
    }
}
