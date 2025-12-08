package fr.eb.tournament.mapper;

import fr.eb.tournament.dto.RankingDTO;
import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.entity.RankingEntity;
import org.mapstruct.*;

/**
 * MapStruct mapper for Ranking entity and DTO conversions.
 * Uses constructor injection strategy for clean dependency management.
 */
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RankingMapper {

    /**
     * Converts RankingEntity to RankingDTO.
     * Note: totalGames must be set in the service layer.
     *
     * @param entity The ranking entity
     * @return The ranking DTO
     */
    @Mapping(target = "playerId", source = "player.id")
    @Mapping(target = "name", expression = "java(getDisplayName(entity.getPlayer()))")
    @Mapping(target = "picture", source = "player.picture")
    @Mapping(target = "category", source = "player.category")
    @Mapping(target = "totalGames", ignore = true) // Set in service layer
    RankingDTO toDTO(RankingEntity entity);

    /**
     * Helper method to combine player name and firstname.
     */
    default String getDisplayName(PlayerEntity player) {
        if (player == null) {
            return null;
        }
        return player.getName() + " " + player.getFirstname();
    }
}
