package fr.eb.tournament.mapper;

import fr.eb.tournament.dto.TeamDTO;
import fr.eb.tournament.entity.TeamEntity;
import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.util.TextNormalizationUtil;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * MapStruct mapper for Team entity and DTO conversions.
 */
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class TeamMapper {

    @Autowired
    protected PlayerRepository playerRepository;

    /**
     * Converts TeamEntity to TeamDTO.
     * Includes normalized name and player count.
     *
     * @param entity The team entity
     * @return The team DTO
     */
    @Mapping(target = "normalizedName", expression = "java(normalizeTeamName(entity.getName()))")
    @Mapping(target = "playerCount", expression = "java(getPlayerCount(entity.getId()))")
    public abstract TeamDTO toDTO(TeamEntity entity);

    /**
     * Converts TeamDTO to TeamEntity.
     * Note: normalizedName and playerCount are DTO-only fields, not in Entity.
     *
     * @param dto The team DTO
     * @return The team entity
     */
    public abstract TeamEntity toEntity(TeamDTO dto);

    /**
     * Helper method for name normalization.
     */
    protected String normalizeTeamName(String name) {
        return TextNormalizationUtil.normalize(name);
    }

    /**
     * Helper method to get player count.
     */
    protected int getPlayerCount(Long teamId) {
        return (int) playerRepository.countByTeamId(teamId);
    }
}
