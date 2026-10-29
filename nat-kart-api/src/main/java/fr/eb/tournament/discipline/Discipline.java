package fr.eb.tournament.discipline;

/**
 * Agnostic game discipline categorization.
 * Enables the tournament platform to host racing games, fighting games, sports, or custom events.
 * SOLID (OCP): Each discipline encapsulates its display properties, labels, icons, and theme colors.
 */
public enum Discipline {
    RACING(
            "Course & Karting",
            "Lap",
            "Circuit",
            "Kart",
            "Temps",
            "Points",
            "pi pi-flag",
            "#EF4444"
    ),
    VERSUS_FIGHTING(
            "Jeu de Combat",
            "Round",
            "Arène",
            "Combattant",
            "K.O. / PV",
            "Victoires",
            "pi pi-bolt",
            "#8B5CF6"
    ),
    SPORTS(
            "Sport & Duel",
            "Période",
            "Terrain",
            "Équipe",
            "Score",
            "Points",
            "pi pi-trophy",
            "#10B981"
    ),
    CUSTOM(
            "Générique",
            "Manche",
            "Plateau",
            "Joueur",
            "Score",
            "Classement",
            "pi pi-star",
            "#3B82F6"
    );

    private final String displayName;
    private final String roundLabel;
    private final String stageLabel;
    private final String participantLabel;
    private final String metricLabel;
    private final String scoreLabel;
    private final String defaultIcon;
    private final String primaryColor;

    Discipline(
            String displayName,
            String roundLabel,
            String stageLabel,
            String participantLabel,
            String metricLabel,
            String scoreLabel,
            String defaultIcon,
            String primaryColor) {
        this.displayName = displayName;
        this.roundLabel = roundLabel;
        this.stageLabel = stageLabel;
        this.participantLabel = participantLabel;
        this.metricLabel = metricLabel;
        this.scoreLabel = scoreLabel;
        this.defaultIcon = defaultIcon;
        this.primaryColor = primaryColor;
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

    public String getDefaultIcon() {
        return defaultIcon;
    }

    public String getPrimaryColor() {
        return primaryColor;
    }
}
