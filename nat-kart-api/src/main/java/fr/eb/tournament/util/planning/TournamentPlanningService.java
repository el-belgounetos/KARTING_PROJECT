package fr.eb.tournament.util.planning;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.*;

/**
 * Service for tournament planning generation and optimization.
 * Implements the same algorithm as the PowerShell script rencontres.ps1
 */
@Slf4j
@RequiredArgsConstructor
public class TournamentPlanningService {

    private final TournamentConfig config;
    private final Random random = new Random();

    // ══════════════════════════════════════════════════════════════════════
    // PLANNING GENERATION
    // ══════════════════════════════════════════════════════════════════════

    /**
     * Generates an initial planning with balanced player distribution.
     */
    public Planning generateInitialPlanning() {
        Planning planning = new Planning();

        // Shuffle players
        List<Integer> shuffledPlayers = new ArrayList<>();
        for (int i = 1; i <= config.getNbJoueurs(); i++) {
            shuffledPlayers.add(i);
        }
        Collections.shuffle(shuffledPlayers, random);

        int nbSessions = config.getNbSessions();
        int playersPerSession = config.getNbJoueurs() / nbSessions;
        int remainder = config.getNbJoueurs() % nbSessions;

        // Distribute players across sessions
        List<List<Integer>> sessionGroups = new ArrayList<>();
        int index = 0;

        for (int s = 0; s < nbSessions; s++) {
            int nbPlayersThisSession = playersPerSession;
            if (s < remainder) {
                nbPlayersThisSession++;
            }

            List<Integer> playersInSession = new ArrayList<>();
            for (int i = 0; i < nbPlayersThisSession; i++) {
                playersInSession.add(shuffledPlayers.get(index++));
            }
            sessionGroups.add(playersInSession);
        }

        // Create planning structure for each console
        for (Console console : config.getConsoles()) {
            Map<Integer, List<List<Integer>>> consoleSessions = new HashMap<>();

            for (int session = 0; session < nbSessions; session++) {
                int sessionIdx = (session + config.getConsoles().indexOf(console)) % nbSessions;
                List<Integer> playersInSession = sessionGroups.get(sessionIdx);

                List<List<Integer>> groups = new ArrayList<>();

                int nbGroupsNeeded = (int) Math.ceil((double) playersInSession.size() / console.getJoueursParPartie());
                int nbActiveGroups = Math.min(nbGroupsNeeded, console.getNbGroupes());

                int idx = 0;
                int playersRemaining = playersInSession.size();

                for (int g = 0; g < nbActiveGroups; g++) {
                    int groupsRemaining = nbActiveGroups - g;
                    int playersInGroup = (int) Math.ceil((double) playersRemaining / groupsRemaining);
                    playersInGroup = Math.min(playersInGroup, console.getJoueursParPartie());

                    List<Integer> group = new ArrayList<>();
                    for (int j = 0; j < playersInGroup && idx < playersInSession.size(); j++) {
                        group.add(playersInSession.get(idx++));
                    }

                    groups.add(group);
                    playersRemaining -= playersInGroup;
                }

                // Fill empty groups
                while (groups.size() < console.getNbGroupes()) {
                    groups.add(new ArrayList<>());
                }

                consoleSessions.put(session, groups);
            }

            planning.getStructure().put(console.getNom(), consoleSessions);
        }

        return planning;
    }

    // ══════════════════════════════════════════════════════════════════════
    // VALIDATION
    // ══════════════════════════════════════════════════════════════════════

    /**
     * Validates that a planning respects all constraints.
     */
    public boolean validatePlanning(Planning planning) {
        int nbSessions = config.getNbSessions();

        // Check: each session must have all players exactly once
        for (int session = 0; session < nbSessions; session++) {
            Set<Integer> playersInSession = new HashSet<>();

            for (Console console : config.getConsoles()) {
                List<List<Integer>> groups = planning.getSessionGroupes(console.getNom(), session);
                for (List<Integer> group : groups) {
                    for (Integer player : group) {
                        if (playersInSession.contains(player)) {
                            return false; // Player plays twice in same session
                        }
                        playersInSession.add(player);
                    }
                }
            }

            if (playersInSession.size() != config.getNbJoueurs()) {
                return false; // Not all players in session
            }
        }

        // Check: each player plays exactly once on each console
        for (int player = 1; player <= config.getNbJoueurs(); player++) {
            for (Console console : config.getConsoles()) {
                int count = 0;
                for (int session = 0; session < nbSessions; session++) {
                    List<List<Integer>> groups = planning.getSessionGroupes(console.getNom(), session);
                    for (List<Integer> group : groups) {
                        if (group.contains(player)) {
                            count++;
                        }
                    }
                }
                if (count != 1) {
                    return false; // Player doesn't play exactly once on this console
                }
            }
        }

        return true;
    }

    // ══════════════════════════════════════════════════════════════════════
    // SCORING
    // ══════════════════════════════════════════════════════════════════════

    /**
     * Counts encounters between all player pairs.
     */
    public Map<String, Integer> calculateEncounters(Planning planning) {
        Map<String, Integer> encounters = new HashMap<>();

        for (Console console : config.getConsoles()) {
            for (int session = 0; session < config.getNbSessions(); session++) {
                List<List<Integer>> groups = planning.getSessionGroupes(console.getNom(), session);

                for (List<Integer> group : groups) {
                    // Count all pairs in this group
                    for (int i = 0; i < group.size(); i++) {
                        for (int j = i + 1; j < group.size(); j++) {
                            int p1 = Math.min(group.get(i), group.get(j));
                            int p2 = Math.max(group.get(i), group.get(j));
                            String key = p1 + "-" + p2;

                            encounters.put(key, encounters.getOrDefault(key, 0) + 1);
                        }
                    }
                }
            }
        }

        return encounters;
    }

    /**
     * Calculates the score of a planning based on encounter distribution.
     */
    public ScoreResult calculateScore(Map<String, Integer> encounters) {
        double score = 0;
        Map<Integer, Integer> distribution = new HashMap<>();
        int collisions = 0;
        int maxEncounters = 0;

        // Check all possible pairs
        for (int i = 1; i <= config.getNbJoueurs(); i++) {
            for (int j = i + 1; j <= config.getNbJoueurs(); j++) {
                String key = i + "-" + j;
                int count = encounters.getOrDefault(key, 0);

                distribution.put(count, distribution.getOrDefault(count, 0) + 1);

                if (count > 1) {
                    collisions += (count - 1);
                }

                if (count > maxEncounters) {
                    maxEncounters = count;
                }

                // Cubic penalty for repeated encounters
                score += Math.pow(count, 3) * 100;
            }
        }

        return new ScoreResult(score, distribution, collisions, maxEncounters);
    }

    // ══════════════════════════════════════════════════════════════════════
    // OPTIMIZATION - SWAP ALGORITHMS
    // ══════════════════════════════════════════════════════════════════════

    /**
     * Swap1: Exchange players between groups in the same session.
     */
    public Planning swap1IntraSession(Planning planning) {
        Planning nouveau = planning.copy();

        // Filter consoles with multiple groups
        List<Console> validConsoles = config.getConsoles().stream()
                .filter(c -> c.getNbGroupes() > 1)
                .toList();

        if (validConsoles.isEmpty()) {
            return nouveau;
        }

        Console console = validConsoles.get(random.nextInt(validConsoles.size()));
        int session = random.nextInt(config.getNbSessions());

        int g1 = random.nextInt(console.getNbGroupes());
        int g2 = random.nextInt(console.getNbGroupes());

        // Try to get different groups
        int attempts = 0;
        while (g1 == g2 && attempts < 10) {
            g2 = random.nextInt(console.getNbGroupes());
            attempts++;
        }

        if (g1 == g2) {
            return nouveau;
        }

        List<Integer> group1 = nouveau.getGroupe(console.getNom(), session, g1);
        List<Integer> group2 = nouveau.getGroupe(console.getNom(), session, g2);

        if (!group1.isEmpty() && !group2.isEmpty()) {
            int idx1 = random.nextInt(group1.size());
            int idx2 = random.nextInt(group2.size());

            // Swap players
            int temp = group1.get(idx1);
            group1.set(idx1, group2.get(idx2));
            group2.set(idx2, temp);
        }

        return nouveau;
    }

    /**
     * Swap2: Exchange players between two different sessions.
     */
    public Planning swap2InterSessions(Planning planning, Map<String, Integer> encounters, boolean targetCollisions) {
        Planning nouveau = planning.copy();

        int s1 = random.nextInt(config.getNbSessions());
        int s2 = random.nextInt(config.getNbSessions());

        // Try to get different sessions
        int attempts = 0;
        while (s1 == s2 && attempts < 10) {
            s2 = random.nextInt(config.getNbSessions());
            attempts++;
        }

        if (s1 == s2) {
            return nouveau;
        }

        // Select player A
        Integer playerA = null;

        if (targetCollisions && encounters != null) {
            // Target pairs with most collisions
            List<Map.Entry<String, Integer>> sortedPairs = encounters.entrySet().stream()
                    .filter(e -> e.getValue() > 1)
                    .sorted((a, b) -> Integer.compare(b.getValue(), a.getValue()))
                    .limit(20)
                    .toList();

            if (!sortedPairs.isEmpty()) {
                Map.Entry<String, Integer> pair = sortedPairs.get(random.nextInt(sortedPairs.size()));
                String[] parts = pair.getKey().split("-");
                List<Integer> players = List.of(Integer.parseInt(parts[0]), Integer.parseInt(parts[1]));
                playerA = players.get(random.nextInt(players.size()));
            }
        }

        if (playerA == null) {
            playerA = random.nextInt(config.getNbJoueurs()) + 1;
        }

        // Find positions of playerA in both sessions
        Position posA_s1 = findPlayerPosition(nouveau, playerA, s1);
        Position posA_s2 = findPlayerPosition(nouveau, playerA, s2);

        if (posA_s1 == null || posA_s2 == null) {
            return nouveau;
        }

        // Find compatible player B
        List<PlayerSwapCandidate> candidates = new ArrayList<>();

        for (int player = 1; player <= config.getNbJoueurs(); player++) {
            if (player == playerA)
                continue;

            Position posB_s1 = findPlayerPosition(nouveau, player, s1);
            Position posB_s2 = findPlayerPosition(nouveau, player, s2);

            if (posB_s1 != null && posB_s2 != null &&
                    posB_s1.consoleName.equals(posA_s2.consoleName) &&
                    posB_s2.consoleName.equals(posA_s1.consoleName)) {

                candidates.add(new PlayerSwapCandidate(player, posB_s1, posB_s2));
            }
        }

        if (candidates.isEmpty()) {
            return nouveau;
        }

        PlayerSwapCandidate choiceB = candidates.get(random.nextInt(candidates.size()));

        // Perform the swap
        List<Integer> groupA_s1 = nouveau.getGroupe(posA_s1.consoleName, s1, posA_s1.groupIdx);
        List<Integer> groupA_s2 = nouveau.getGroupe(posA_s2.consoleName, s2, posA_s2.groupIdx);
        List<Integer> groupB_s1 = nouveau.getGroupe(choiceB.posS1.consoleName, s1, choiceB.posS1.groupIdx);
        List<Integer> groupB_s2 = nouveau.getGroupe(choiceB.posS2.consoleName, s2, choiceB.posS2.groupIdx);

        groupA_s1.set(posA_s1.playerIdx, choiceB.player);
        groupA_s2.set(posA_s2.playerIdx, choiceB.player);
        groupB_s1.set(choiceB.posS1.playerIdx, playerA);
        groupB_s2.set(choiceB.posS2.playerIdx, playerA);

        return nouveau;
    }

    /**
     * Helper: Find position of a player in a session.
     */
    private Position findPlayerPosition(Planning planning, int player, int session) {
        for (Console console : config.getConsoles()) {
            List<List<Integer>> groups = planning.getSessionGroupes(console.getNom(), session);
            for (int g = 0; g < groups.size(); g++) {
                List<Integer> group = groups.get(g);
                int idx = group.indexOf(player);
                if (idx >= 0) {
                    return new Position(console.getNom(), g, idx);
                }
            }
        }
        return null;
    }

    /**
     * Helper class for player position.
     */
    private static class Position {
        String consoleName;
        int groupIdx;
        int playerIdx;

        Position(String consoleName, int groupIdx, int playerIdx) {
            this.consoleName = consoleName;
            this.groupIdx = groupIdx;
            this.playerIdx = playerIdx;
        }
    }

    /**
     * Helper class for swap candidates.
     */
    private static class PlayerSwapCandidate {
        int player;
        Position posS1;
        Position posS2;

        PlayerSwapCandidate(int player, Position posS1, Position posS2) {
            this.player = player;
            this.posS1 = posS1;
            this.posS2 = posS2;
        }
    }

    /**
     * Generates a hash for the planning to detect duplicates.
     */
    public String getPlanningHash(Planning planning) {
        StringBuilder sb = new StringBuilder();

        for (Console console : config.getConsoles()) {
            for (int s = 0; s < config.getNbSessions(); s++) {
                for (int g = 0; g < console.getNbGroupes(); g++) {
                    List<Integer> players = planning.getGroupe(console.getNom(), s, g);
                    sb.append(console.getNom()).append("|").append(s).append("|").append(g).append(":");
                    sb.append(String.join(",", players.stream().map(String::valueOf).toList()));
                    sb.append(";");
                }
            }
        }

        return String.valueOf(sb.toString().hashCode());
    }
}
