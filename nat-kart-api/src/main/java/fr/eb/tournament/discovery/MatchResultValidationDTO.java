package fr.eb.tournament.discovery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Payload sent by the organizer when validating match scores from a station.
 * Confirms the player identity for each controller slot before awarding points.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MatchResultValidationDTO {
    private String stationId;
    private String gameTitle;
    private String stageOrTrack;
    private List<SlotResultDTO> results;
}
