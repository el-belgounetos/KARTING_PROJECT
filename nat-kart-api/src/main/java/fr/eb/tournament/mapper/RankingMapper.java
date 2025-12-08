package fr.eb.tournament.mapper;

import fr.eb.tournament.dto.RankingDTO;
import fr.eb.tournament.entity.PlayerEntity;
import fr.eb.tournament.entity.RankingEntity;
import fr.eb.tournament.repository.HistoryRepository;
import org.mapstruct.*;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * MapStruct mapper for Ranking entity and DTO conversions.
 */
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class RankingMapper {

    @Autowired
    protected HistoryRepository historyRepository;

    /**
     * Converts RankingEntity to RankingDTO.
     * Combines player name/firstname and calculates total games.
     *
     * @param entity The ranking entity
     * @return The ranking DTO
     */
    @Mapping(target = "playerId", source = "player.id")
    @Mapping(target = "name", expression = "java(getDisplayName(entity.getPlayer()))")
    @Mapping(target = "picture", source = "player.picture")
    @Mapping(target = "category", source = "player.category")
    @Mapping(target = "totalGames", expression = "java(getTotalGames(entity.getPlayer()))")
    public abstract RankingDTO toDTO(RankingEntity entity);

    /**
     * Helper method to combine player name and firstname.
     */
    protected String getDisplayName(PlayerEntity player) {
        if (player == null) {
            return null;
        }
        return player.getName() + " " + player.getFirstname();
    }

    /**
     * Helper method to get total games count.
     */
    protected int getTotalGames(PlayerEntity player) {
        if (player == null) {
            return 0;
        }
        Long count = historyRepository.countByPlayer(player);
        return count != null ? count.intValue() : 0;
    }
}
