package fr.eb.tournament.mapper;

import fr.eb.tournament.dto.PlayerDTO;
import fr.eb.tournament.entity.PlayerEntity;
import org.mapstruct.*;

/**
 * MapStruct mapper for Player entity and DTO conversions.
 * Automatically generates implementation at compile time.
 */
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PlayerMapper {

    /**
     * Converts PlayerEntity to PlayerDTO.
     * Team information is mapped via custom expressions.
     *
     * @param entity The player entity
     * @return The player DTO
     */
    @Mapping(target = "teamName", expression = "java(entity.getTeam() != null ? entity.getTeam().getName() : null)")
    @Mapping(target = "teamId", expression = "java(entity.getTeam() != null ? entity.getTeam().getId() : null)")
    PlayerDTO toDTO(PlayerEntity entity);

    /**
     * Converts PlayerDTO to PlayerEntity.
     * Team relationship is NOT set here - must be handled in service layer.
     *
     * @param dto The player DTO
     * @return The player entity (without team)
     */
    @Mapping(target = "team", ignore = true)
    PlayerEntity toEntity(PlayerDTO dto);
}
