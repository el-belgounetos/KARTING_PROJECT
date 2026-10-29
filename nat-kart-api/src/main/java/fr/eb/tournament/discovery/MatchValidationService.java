package fr.eb.tournament.discovery;

import fr.eb.tournament.repository.PlayerRepository;
import fr.eb.tournament.service.RankingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Service managing staged session results, score adjustments, and point distribution.
 * SOLID (SRP): Responsible solely for match scoring lifecycle (staging, adjustment, final validation).
 * DRY: Centralizes slot result generation and points assignment. Zero magic numbers.
 */
@Slf4j
@Service
public class MatchValidationService {

    public static final int DEFAULT_SLOTS_COUNT = 4;
    public static final int FIRST_PLACE_RANK = 1;
    public static final String DEFAULT_SLOT_PREFIX = "J";
    public static final String DEFAULT_STAGE_TITLE = "Session de Tournoi";
    public static final String DEFAULT_CHARACTER_NAME = "Manuel";
    public static final String DEFAULT_PLAYER_FALLBACK_PREFIX = "Joueur ";

    /**
     * Standard tournament point distribution by finishing rank (1st to 8th).
     */
    public static final int[] DEFAULT_POINTS_DISTRIBUTION = {15, 12, 10, 8, 7, 6, 5, 4};

    private final RankingService rankingService;
    private final PlayerRepository playerRepository;
    private final Map<String, MatchResultValidationDTO> stagedResults = new ConcurrentHashMap<>();

    public MatchValidationService(
            @Lazy RankingService rankingService,
            @Lazy PlayerRepository playerRepository) {
        this.rankingService = rankingService;
        this.playerRepository = playerRepository;
    }

    /**
     * Generates a standardized list of slot results based on assigned player mappings.
     * Prevents duplicate slot creation logic (DRY).
     */
    public List<SlotResultDTO> buildDefaultSlotResults(
            int slotCount,
            Map<String, String> playerSlots,
            Map<String, Long> playerSlotIds) {

        int totalSlots = slotCount > 0 ? slotCount : DEFAULT_SLOTS_COUNT;
        Map<String, String> safeSlots = playerSlots != null ? playerSlots : Collections.emptyMap();
        Map<String, Long> safeSlotIds = playerSlotIds != null ? playerSlotIds : Collections.emptyMap();

        List<SlotResultDTO> results = new ArrayList<>(totalSlots);
        for (int i = 0; i < totalSlots; i++) {
            int rank = i + 1;
            String slotKey = DEFAULT_SLOT_PREFIX + rank;
            String playerName = safeSlots.getOrDefault(slotKey, DEFAULT_PLAYER_FALLBACK_PREFIX + rank);
            Long playerId = safeSlotIds.get(slotKey);
            int points = (i < DEFAULT_POINTS_DISTRIBUTION.length) ? DEFAULT_POINTS_DISTRIBUTION[i] : 0;
            boolean victory = (rank == FIRST_PLACE_RANK);

            results.add(SlotResultDTO.builder()
                    .slotId(slotKey)
                    .characterName(DEFAULT_CHARACTER_NAME)
                    .playerName(playerName)
                    .playerId(playerId)
                    .rank(rank)
                    .pointsAwarded(points)
                    .victory(victory)
                    .build());
        }
        return results;
    }

    /**
     * Retrieves existing staged results for a console or generates default results.
     */
    public MatchResultValidationDTO getOrCreateStagedResults(
            String stationId,
            String gameTitle,
            int slotCount,
            Map<String, String> playerSlots,
            Map<String, Long> playerSlotIds) {

        return stagedResults.computeIfAbsent(stationId, id -> {
            List<SlotResultDTO> slots = buildDefaultSlotResults(slotCount, playerSlots, playerSlotIds);
            return MatchResultValidationDTO.builder()
                    .stationId(stationId)
                    .gameTitle(gameTitle != null ? gameTitle : "Session de Jeu")
                    .stageOrTrack(DEFAULT_STAGE_TITLE)
                    .results(slots)
                    .build();
        });
    }

    /**
     * Explicitly stages results for a station.
     */
    public void stageResults(String stationId, MatchResultValidationDTO results) {
        if (stationId != null && results != null) {
            stagedResults.put(stationId, results);
        }
    }

    /**
     * Validates scores and commits tournament points to players.
     */
    public void commitMatchResults(MatchResultValidationDTO validationDTO) {
        if (validationDTO == null || validationDTO.getResults() == null) {
            throw new IllegalArgumentException("Validation results cannot be null");
        }

        for (SlotResultDTO slot : validationDTO.getResults()) {
            if (slot.getPlayerId() != null) {
                rankingService.addPointsToPlayer(slot.getPlayerId(), slot.getPointsAwarded(), slot.isVictory());
            } else if (slot.getPlayerName() != null && !slot.getPlayerName().isBlank()) {
                playerRepository.findByPseudo(slot.getPlayerName()).ifPresent(player ->
                        rankingService.addPointsToPlayer(player.getId(), slot.getPointsAwarded(), slot.isVictory())
                );
            }
        }
        stagedResults.remove(validationDTO.getStationId());
        log.info("[SCORING] Validated and awarded tournament points for station: {}", validationDTO.getStationId());
    }
}
