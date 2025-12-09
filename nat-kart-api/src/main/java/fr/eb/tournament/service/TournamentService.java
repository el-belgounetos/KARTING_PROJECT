package fr.eb.tournament.service;

import fr.eb.tournament.dto.*;
import fr.eb.tournament.util.planning.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.IntStream;

/**
 * Service for generating tournament planning from DTOs.
 * Orchestrates the conversion between DTOs and the planning algorithm.
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class TournamentService {

    /**
     * Generates a tournament planning from a request.
     * 
     * @param request Tournament request with player IDs and console configs
     * @return Tournament planning with sessions, groups, and player IDs
     */
    public TournamentPlanningDTO generatePlanning(TournamentRequest request) {
        log.info("Generating tournament planning for {} players on {} consoles",
                request.getPlayerIds().size(), request.getConsoles().size());

        // 1. Convert DTOs to internal model
        TournamentConfig config = toTournamentConfig(request);
        Map<Long, Integer> playerIdToIndex = createPlayerIdMapping(request.getPlayerIds());
        Map<Long, Console> consoleIdToConsole = createConsoleMapping(request.getConsoles());

        // 2. Run the planning algorithm
        TournamentPlanningService planningService = new TournamentPlanningService(config);
        Planning planning = generateBestPlanning(planningService, config);

        // 3. Calculate final score
        Map<String, Integer> encounters = planningService.calculateEncounters(planning);
        ScoreResult scoreResult = planningService.calculateScore(encounters);

        // 4. Convert result back to DTOs
        return toPlanningDTO(planning, scoreResult, playerIdToIndex, consoleIdToConsole, config);
    }

    /**
     * Converts TournamentRequest to internal TournamentConfig.
     */
    private TournamentConfig toTournamentConfig(TournamentRequest request) {
        // Create Console objects from ConsoleConfigDTOs
        List<Console> consoles = IntStream.range(0, request.getConsoles().size())
                .mapToObj(i -> {
                    ConsoleConfigDTO configDTO = request.getConsoles().get(i);
                    return new Console(
                            "Console " + (i + 1), // Name: Console 1, Console 2, etc.
                            configDTO.getJoueursParPartie(),
                            request.getConsoles().size() // nbGroupes = nbConsoles
                    );
                })
                .toList();

        return new TournamentConfig(
                request.getPlayerIds().size(),
                request.getNbRelances(),
                request.getNbIterationsParRelance(),
                consoles,
                request.getDisplayInterval(),
                request.getEarlyStoppingThreshold());
    }

    /**
     * Creates mapping from player ID to algorithm index (1-based).
     */
    private Map<Long, Integer> createPlayerIdMapping(List<Long> playerIds) {
        Map<Long, Integer> mapping = new HashMap<>();
        for (int i = 0; i < playerIds.size(); i++) {
            mapping.put(playerIds.get(i), i + 1); // Algorithm uses 1-based indexing
        }
        return mapping;
    }

    /**
     * Creates mapping from console ID to Console object.
     */
    private Map<Long, Console> createConsoleMapping(List<ConsoleConfigDTO> consoleDTOs) {
        Map<Long, Console> mapping = new HashMap<>();
        for (int i = 0; i < consoleDTOs.size(); i++) {
            ConsoleConfigDTO dto = consoleDTOs.get(i);
            Console console = new Console(
                    "Console " + (i + 1),
                    dto.getJoueursParPartie(),
                    consoleDTOs.size());
            mapping.put(dto.getConsoleId(), console);
        }
        return mapping;
    }

    /**
     * Runs the planning algorithm with multiple restarts.
     */
    private Planning generateBestPlanning(TournamentPlanningService service, TournamentConfig config) {
        Planning bestPlanning = null;
        double bestScore = Double.MAX_VALUE;

        for (int relance = 1; relance <= config.getNbRelances(); relance++) {
            log.debug("Starting restart {}/{}", relance, config.getNbRelances());

            // Generate initial planning
            Planning planning = service.generateInitialPlanning();

            // Validate
            if (!service.validatePlanning(planning)) {
                log.warn("Invalid initial planning for restart {}, skipping", relance);
                continue;
            }

            // Calculate initial score
            Map<String, Integer> encounters = service.calculateEncounters(planning);
            ScoreResult scoreObj = service.calculateScore(encounters);

            Planning currentBest = planning;
            double currentBestScore = scoreObj.getScore();
            Set<String> testedHashes = new HashSet<>();
            testedHashes.add(service.getPlanningHash(planning));

            // Optimization loop
            for (int i = 0; i < config.getNbIterationsParRelance(); i++) {
                // Random swap
                Planning newPlanning = new Random().nextBoolean()
                        ? service.swap1IntraSession(currentBest)
                        : service.swap2InterSessions(currentBest, encounters, new Random().nextInt(100) < 70);

                if (service.validatePlanning(newPlanning)) {
                    String hash = service.getPlanningHash(newPlanning);

                    if (!testedHashes.contains(hash)) {
                        testedHashes.add(hash);

                        Map<String, Integer> newEncounters = service.calculateEncounters(newPlanning);
                        ScoreResult newScore = service.calculateScore(newEncounters);

                        if (newScore.getScore() < currentBestScore) {
                            currentBest = newPlanning;
                            currentBestScore = newScore.getScore();
                            encounters = newEncounters;

                            // Early stopping
                            if (newScore.getMaxRencontres() <= config.getEarlyStoppingThreshold()) {
                                log.info("Optimal score reached in restart {}", relance);
                                return currentBest;
                            }
                        }
                    }
                }
            }

            // Update global best
            if (currentBestScore < bestScore) {
                bestPlanning = currentBest;
                bestScore = currentBestScore;
            }
        }

        log.info("Planning generation completed with score: {}", bestScore);
        return bestPlanning;
    }

    /**
     * Converts internal Planning to TournamentPlanningDTO.
     */
    private TournamentPlanningDTO toPlanningDTO(Planning planning, ScoreResult scoreResult,
            Map<Long, Integer> playerIdToIndex,
            Map<Long, Console> consoleIdToConsole,
            TournamentConfig config) {
        // Reverse mapping: algorithm index → player ID
        Map<Integer, Long> indexToPlayerId = new HashMap<>();
        playerIdToIndex.forEach((playerId, index) -> indexToPlayerId.put(index, playerId));

        // Reverse mapping: console name → console ID
        Map<String, Long> consoleNameToId = new HashMap<>();
        consoleIdToConsole.forEach((id, console) -> consoleNameToId.put(console.getNom(), id));

        List<TournamentPlanningDTO.SessionDTO> sessions = new ArrayList<>();

        for (int s = 0; s < config.getNbSessions(); s++) {
            List<TournamentPlanningDTO.ConsoleSessionDTO> consoleSessions = new ArrayList<>();

            for (Console console : config.getConsoles()) {
                Long consoleId = consoleNameToId.get(console.getNom());
                List<TournamentPlanningDTO.GroupeDTO> groupes = new ArrayList<>();

                List<List<Integer>> groups = planning.getSessionGroupes(console.getNom(), s);
                for (int g = 0; g < groups.size(); g++) {
                    List<Integer> playerIndices = groups.get(g);

                    // Convert player indices to IDs
                    List<Long> playerIds = playerIndices.stream()
                            .map(indexToPlayerId::get)
                            .toList();

                    if (!playerIds.isEmpty()) {
                        groupes.add(new TournamentPlanningDTO.GroupeDTO(g + 1, playerIds));
                    }
                }

                consoleSessions.add(new TournamentPlanningDTO.ConsoleSessionDTO(consoleId, groupes));
            }

            sessions.add(new TournamentPlanningDTO.SessionDTO(s + 1, consoleSessions));
        }

        ScoreInfoDTO scoreInfo = new ScoreInfoDTO(
                scoreResult.getScore(),
                scoreResult.getCollisions(),
                scoreResult.getMaxRencontres(),
                scoreResult.getDistribution());

        return new TournamentPlanningDTO(sessions, scoreInfo);
    }
}
