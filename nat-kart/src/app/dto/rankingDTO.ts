export interface RankingDTO {
    playerId?: number;
    name: string;
    picture?: string;
    points: number;
    rank: number;
    victory: number;
    totalGames?: number; // Added optional to match backend changes
    category?: string;
}
