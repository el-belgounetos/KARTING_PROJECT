package fr.eb.tournament.util.planning;

import lombok.extern.slf4j.Slf4j;

import java.util.*;

/**
 * Main class to test tournament planning generation and optimization.
 * Mirrors the PowerShell script rencontres.ps1
 */
@Slf4j
public class TournamentMakerTest {

    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════╗");
        System.out.println("║  OPTIMISATION MARIO KART - VERSION JAVA           ║");
        System.out.println("╚═══════════════════════════════════════════════════╝\n");

        // ══════════════════════════════════════════════════════════════════
        // CONFIGURATION (hardcoded for now)
        // ══════════════════════════════════════════════════════════════════

        TournamentConfig config = createDefaultConfig();

        System.out.println("📊 Configuration :");
        System.out.println("   Nombre de joueurs : " + config.getNbJoueurs());
        System.out.println("   Nombre de sessions : " + config.getNbSessions());
        System.out.println("   Nombre de relances : " + config.getNbRelances());
        System.out.println("   Itérations par relance : " + config.getNbIterationsParRelance());
        System.out.println();

        for (Console console : config.getConsoles()) {
            System.out.println("   " + console.getNom() + " : " + console.getNbGroupes() +
                    " groupes × " + console.getJoueursParPartie() + " joueurs");
        }
        System.out.println();

        // ══════════════════════════════════════════════════════════════════
        // OPTIMIZATION with multiple restarts
        // ══════════════════════════════════════════════════════════════════

        TournamentPlanningService service = new TournamentPlanningService(config);

        Planning bestPlanningGlobal = null;
        double bestScoreGlobal = Double.MAX_VALUE;
        List<RelanceStats> allStats = new ArrayList<>();

        for (int relance = 1; relance <= config.getNbRelances(); relance++) {
            System.out.println("\n╔═══════════════════════════════════════════════════╗");
            System.out.println(
                    "║  RELANCE " + relance + " / " + config.getNbRelances() + "                                   ║");
            System.out.println("╚═══════════════════════════════════════════════════╝");

            OptimizationResult result = runOptimization(service, config, relance);

            if (result == null) {
                continue;
            }

            allStats.add(new RelanceStats(relance, result.scoreObj.getScore(),
                    result.scoreObj.getCollisions(), result.scoreObj.getMaxRencontres(),
                    result.improvements));

            if (result.scoreObj.getScore() < bestScoreGlobal) {
                bestPlanningGlobal = result.planning;
                bestScoreGlobal = result.scoreObj.getScore();
                System.out.println("🏆 NOUVEAU MEILLEUR SCORE GLOBAL !");
            }

            if (result.optimalReached) {
                System.out.println("\n🎯 SCORE OPTIMAL ATTEINT ! Arrêt de toutes les relances.");
                break;
            }
        }

        // ══════════════════════════════════════════════════════════════════
        // FINAL RESULT
        // ══════════════════════════════════════════════════════════════════

        System.out.println("\n\n╔═══════════════════════════════════════════════════╗");
        System.out.println("║  RÉSULTAT FINAL - MEILLEUR PLANNING               ║");
        System.out.println("╚═══════════════════════════════════════════════════╝\n");

        Map<String, Integer> finalEncounters = service.calculateEncounters(bestPlanningGlobal);
        ScoreResult finalScore = service.calculateScore(finalEncounters);
        System.out.println(finalScore);

        displayPlanning(bestPlanningGlobal, config);

        System.out.println("\n📈 Statistiques des relances :");
        for (RelanceStats stats : allStats) {
            System.out.printf("  Relance %d: Score=%.0f | Collisions=%d | Max=%d | Améliorations=%d%n",
                    stats.relance, stats.score, stats.collisions, stats.maxEncounters, stats.improvements);
        }
    }

    /**
     * Runs one optimization cycle (one restart).
     */
    private static OptimizationResult runOptimization(TournamentPlanningService service,
            TournamentConfig config, int relanceNumber) {
        // Generate initial planning
        Planning planning = service.generateInitialPlanning();

        System.out.println("\n🔍 Validation du planning initial...");
        if (!service.validatePlanning(planning)) {
            System.out.println("❌ Planning initial INVALIDE ! Passage à la relance suivante.");
            return null;
        }
        System.out.println("✅ Planning initial VALIDE !");

        Map<String, Integer> encounters = service.calculateEncounters(planning);
        ScoreResult scoreObj = service.calculateScore(encounters);
        System.out.println("\nInitial " + scoreObj);

        Planning bestPlanning = planning;
        double bestScore = scoreObj.getScore();
        int improvements = 0;
        Set<String> testedHashes = new HashSet<>();
        int swap1Count = 0;
        int swap2Count = 0;
        int swap2TargetedCount = 0;

        String initialHash = service.getPlanningHash(planning);
        testedHashes.add(initialHash);

        System.out.println("\n🔄 Optimisation en cours...");

        for (int i = 0; i < config.getNbIterationsParRelance(); i++) {
            // Choose swap type randomly
            boolean useSwap1 = new Random().nextBoolean();

            Planning newPlanning;
            if (useSwap1) {
                newPlanning = service.swap1IntraSession(bestPlanning);
                swap1Count++;
            } else {
                boolean targetCollisions = new Random().nextInt(100) < 70; // 70% probability
                if (targetCollisions) {
                    swap2TargetedCount++;
                }
                Map<String, Integer> currentEncounters = service.calculateEncounters(bestPlanning);
                newPlanning = service.swap2InterSessions(bestPlanning, currentEncounters, targetCollisions);
                swap2Count++;
            }

            if (service.validatePlanning(newPlanning)) {
                String newHash = service.getPlanningHash(newPlanning);

                if (!testedHashes.contains(newHash)) {
                    testedHashes.add(newHash);

                    Map<String, Integer> newEncounters = service.calculateEncounters(newPlanning);
                    ScoreResult newScoreObj = service.calculateScore(newEncounters);

                    if (newScoreObj.getScore() < bestScore) {
                        bestPlanning = newPlanning;
                        bestScore = newScoreObj.getScore();
                        improvements++;

                        if (newScoreObj.getMaxRencontres() <= config.getEarlyStoppingThreshold()) {
                            System.out.println("\n🎯 SCORE OPTIMAL ATTEINT ! Arrêt de cette relance.");
                            return new OptimizationResult(bestPlanning, newScoreObj, improvements,
                                    testedHashes.size(), swap1Count, swap2Count, swap2TargetedCount, true);
                        }
                    }
                }
            }

            if ((i + 1) % config.getDisplayInterval() == 0) {
                Map<String, Integer> currentEncounters = service.calculateEncounters(bestPlanning);
                ScoreResult currentScore = service.calculateScore(currentEncounters);
                System.out.println("\n🔄 Itération " + (i + 1) + "/" + config.getNbIterationsParRelance() +
                        " | Améliorations: " + improvements + " | Hash uniques: " + testedHashes.size());
                System.out.println("   Swap1: " + swap1Count + " | Swap2: " + swap2Count +
                        " (ciblés: " + swap2TargetedCount + ")");
                System.out.println("Actuel " + currentScore);
            }
        }

        Map<String, Integer> finalEncounters = service.calculateEncounters(bestPlanning);
        ScoreResult finalScoreObj = service.calculateScore(finalEncounters);

        System.out.println("\n📊 Résultat de la relance " + relanceNumber + " :");
        System.out.println("Configurations uniques testées: " + testedHashes.size());
        System.out.println("Swap1 effectués: " + swap1Count + " | Swap2 effectués: " + swap2Count +
                " (dont " + swap2TargetedCount + " ciblés)");
        System.out.println("Final " + finalScoreObj);

        return new OptimizationResult(bestPlanning, finalScoreObj, improvements,
                testedHashes.size(), swap1Count, swap2Count, swap2TargetedCount, false);
    }

    /**
     * Displays the planning in a table format.
     */
    private static void displayPlanning(Planning planning, TournamentConfig config) {
        System.out.println("\n╔═══════════════════════════════════════════════════╗");
        System.out.println("║  TABLEAU DU PLANNING                               ║");
        System.out.println("╚═══════════════════════════════════════════════════╝\n");

        System.out.printf("%-20s %-15s", "Console", "Groupe");
        for (int s = 0; s < config.getNbSessions(); s++) {
            System.out.printf("%-30s", "Session " + (s + 1));
        }
        System.out.println();
        System.out.println("-".repeat(100));

        for (Console console : config.getConsoles()) {
            for (int g = 0; g < console.getNbGroupes(); g++) {
                System.out.printf("%-20s %-15s", console.getNom(), "Groupe " + (g + 1));

                for (int s = 0; s < config.getNbSessions(); s++) {
                    List<Integer> players = planning.getGroupe(console.getNom(), s, g);
                    String playersStr = players.stream()
                            .map(String::valueOf)
                            .reduce((a, b) -> a + ", " + b)
                            .orElse("");
                    System.out.printf("%-30s", playersStr);
                }
                System.out.println();
            }
        }
        System.out.println();
    }

    /**
     * Creates default configuration for 16 players.
     */
    private static TournamentConfig createDefaultConfig() {
        List<Console> consoles = List.of(
                new Console("Switch 1", 4, 2), // 2 groups of 4 players
                new Console("Switch 2", 4, 2) // 2 groups of 4 players
        );

        return new TournamentConfig(
                16, // 16 players
                3, // 3 restarts
                5000, // 5000 iterations per restart
                consoles,
                500, // display every 500 iterations
                1 // stop if max encounters <= 1
        );
    }

    // ══════════════════════════════════════════════════════════════════
    // Helper classes
    // ══════════════════════════════════════════════════════════════════

    private static class OptimizationResult {
        Planning planning;
        ScoreResult scoreObj;
        int improvements;
        int uniqueHashes;
        int swap1Count;
        int swap2Count;
        int swap2TargetedCount;
        boolean optimalReached;

        OptimizationResult(Planning planning, ScoreResult scoreObj, int improvements,
                int uniqueHashes, int swap1Count, int swap2Count,
                int swap2TargetedCount, boolean optimalReached) {
            this.planning = planning;
            this.scoreObj = scoreObj;
            this.improvements = improvements;
            this.uniqueHashes = uniqueHashes;
            this.swap1Count = swap1Count;
            this.swap2Count = swap2Count;
            this.swap2TargetedCount = swap2TargetedCount;
            this.optimalReached = optimalReached;
        }
    }

    private static class RelanceStats {
        int relance;
        double score;
        int collisions;
        int maxEncounters;
        int improvements;

        RelanceStats(int relance, double score, int collisions, int maxEncounters, int improvements) {
            this.relance = relance;
            this.score = score;
            this.collisions = collisions;
            this.maxEncounters = maxEncounters;
            this.improvements = improvements;
        }
    }
}
