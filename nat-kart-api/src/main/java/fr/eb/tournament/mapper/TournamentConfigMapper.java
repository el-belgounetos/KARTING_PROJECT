package fr.eb.tournament.mapper;

import fr.eb.tournament.dto.TournamentConfigDTO;
import fr.eb.tournament.entity.TournamentConfig;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

/**
 * MapStruct mapper for TournamentConfig entity and DTO.
 */
@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface TournamentConfigMapper {

    TournamentConfigDTO toDTO(TournamentConfig entity);

    TournamentConfig toEntity(TournamentConfigDTO dto);
}
