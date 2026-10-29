package fr.eb.tournament.discipline;

/**
 * Agnostic game discipline categorization.
 * Enables the tournament platform to host racing games, fighting games, sports, or custom events.
 */
public enum Discipline {
    RACING("Course & Karting", "Lap", "Circuit", "Kart", "Temps", "Points"),
    VERSUS_FIGHTING("Jeu de Combat", "Round", "Arène", "Combattant", "K.O. / PV", "Victoires"),
    SPORTS("Sport & Duel", "Période", "Terrain", "Équipe", "Score", "Points"),
    CUSTOM("Générique", "Manche", "Plateau", "Joueur", "Score", "Classement");

    private final String displayName;
    private final String roundLabel;
    private final String stageLabel;
    private final String participantLabel;
    private final String metricLabel;
    private final String scoreLabel;

    Discipline(String displayName, String roundLabel, String stageLabel,
               String participantLabel, String metricLabel, String scoreLabel) {
        this.displayName = displayName;
        this.roundLabel = roundLabel;
        this.stageLabel = stageLabel;
        this.participantLabel = participantLabel;
        this.metricLabel = metricLabel;
        this.scoreLabel = scoreLabel;
    }

    public String getDisplayName() {
        return displayName;
    }

    public String getRoundLabel() {
        return roundLabel;
    }

    public String getStageLabel() {
        return stageLabel;
    }

    public String getParticipantLabel() {
        return participantLabel;
    }

    public String getMetricLabel() {
        return metricLabel;
    }

    public String getScoreLabel() {
        return scoreLabel;
    }
}
