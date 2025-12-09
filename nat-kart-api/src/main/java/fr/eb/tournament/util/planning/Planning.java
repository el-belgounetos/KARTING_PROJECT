package fr.eb.tournament.util.planning;

import lombok.Data;

import java.util.*;

/**
 * Represents a tournament planning: which player plays on which console, group,
 * and session.
 * Structure: Map<ConsoleName, Map<SessionIndex, List<List<PlayerId>>>>
 * 
 * Example: planning.get("Switch 1").get(0).get(1) = [3, 7, 12]
 * means players 3, 7, 12 play on Switch 1, session 0, group 1
 */
@Data
public class Planning {
    // ConsoleName → SessionIndex → GroupIndex → List of PlayerIds
    private Map<String, Map<Integer, List<List<Integer>>>> structure;

    public Planning() {
        this.structure = new HashMap<>();
    }

    /**
     * Deep copy of the planning.
     */
    public Planning copy() {
        Planning nouveau = new Planning();

        for (Map.Entry<String, Map<Integer, List<List<Integer>>>> consoleEntry : this.structure.entrySet()) {
            String consoleName = consoleEntry.getKey();
            Map<Integer, List<List<Integer>>> sessions = new HashMap<>();

            for (Map.Entry<Integer, List<List<Integer>>> sessionEntry : consoleEntry.getValue().entrySet()) {
                Integer sessionIdx = sessionEntry.getKey();
                List<List<Integer>> groupes = new ArrayList<>();

                for (List<Integer> groupe : sessionEntry.getValue()) {
                    groupes.add(new ArrayList<>(groupe));
                }

                sessions.put(sessionIdx, groupes);
            }

            nouveau.structure.put(consoleName, sessions);
        }

        return nouveau;
    }

    /**
     * Get players in a specific group.
     */
    public List<Integer> getGroupe(String consoleName, int session, int groupeIdx) {
        return structure.get(consoleName).get(session).get(groupeIdx);
    }

    /**
     * Set players in a specific group.
     */
    public void setGroupe(String consoleName, int session, int groupeIdx, List<Integer> joueurs) {
        structure.get(consoleName).get(session).set(groupeIdx, joueurs);
    }

    /**
     * Get all groups for a console in a session.
     */
    public List<List<Integer>> getSessionGroupes(String consoleName, int session) {
        return structure.get(consoleName).get(session);
    }
}
