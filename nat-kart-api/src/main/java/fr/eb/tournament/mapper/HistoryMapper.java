package fr.eb.tournament.mapper;

import fr.eb.tournament.dto.ConsoleDTO;
import fr.eb.tournament.dto.CupsDTO;
import fr.eb.tournament.dto.HistoryDTO;
import fr.eb.tournament.dto.RankingDTO;
import fr.eb.tournament.entity.HistoryEntity;
import fr.eb.tournament.entity.PlayerEntity;
import org.mapstruct.*;

/**
 * MapStruct mapper for History entity and DTO conversions.
 */
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class HistoryMapper {

    /**
     * Converts HistoryEntity to HistoryDTO.
     * Includes player, console, and cups information.
     *
     * @param entity The history entity
     * @return The history DTO
     */
    @Mapping(target = "id", expression = "java(entity.getId().intValue())")
    @Mapping(target = "player", expression = "java(toPlayerRankingDTO(entity.getPlayer()))")
    @Mapping(target = "console", expression = "java(toConsoleDTO(entity.getConsoleName(), entity.getConsolePicture()))")
    @Mapping(target = "cups", expression = "java(toCupsDTO(entity.getCupName(), entity.getCupPicture()))")
    public abstract HistoryDTO toDTO(HistoryEntity entity);

    /**
     * Converts player to RankingDTO for history display.
     */
    protected RankingDTO toPlayerRankingDTO(PlayerEntity player) {
        if (player == null) {
            return null;
        }

        RankingDTO dto = new RankingDTO();
        dto.setPlayerId(player.getId());
        dto.setName(player.getName() + " " + player.getFirstname());
        dto.setPicture(player.getPicture());
        dto.setCategory(player.getCategory());
        return dto;
    }

    /**
     * Creates ConsoleDTO from name and picture.
     */
    protected ConsoleDTO toConsoleDTO(String name, String picture) {
        if (name == null) {
            return null;
        }

        ConsoleDTO dto = new ConsoleDTO();
        dto.setName(name);
        dto.setPicture(picture);
        return dto;
    }

    /**
     * Creates CupsDTO from name and picture.
     */
    protected CupsDTO toCupsDTO(String name, String picture) {
        if (name == null) {
            return null;
        }

        CupsDTO dto = new CupsDTO();
        dto.setName(name);
        dto.setPicture(picture);
        return dto;
    }
}
