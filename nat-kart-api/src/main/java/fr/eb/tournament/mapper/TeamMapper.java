package fr.eb.tournament.mapper;

import fr.eb.tournament.dto.TeamDTO;
import fr.eb.tournament.entity.TeamEntity;
import org.mapstruct.*;

/**
 * MapStruct mapper for Team entity and DTO conversions.
 * Uses constructor injection strategy for clean dependency management.
 */
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR, unmappedTargetPolicy = ReportingPolicy.IGNORE, imports = {
        fr.eb.tournament.util.TextNormalizationUtil.class })
public interface TeamMapper {

    /**
     * Converts TeamEntity to TeamDTO.
     * Note: playerCount must be set in the service layer.
     *
     * @param entity The team entity
     * @return The team DTO
     */
    @Mapping(target = "normalizedName", expression = "java(TextNormalizationUtil.normalize(entity.getName()))")
    @Mapping(target = "playerCount", ignore = true) // Set in service layer
    TeamDTO toDTO(TeamEntity entity);

    /**
     * Converts TeamDTO to TeamEntity.
     *
     * @param dto The team DTO
     * @return The team entity
     */
    TeamEntity toEntity(TeamDTO dto);
}
