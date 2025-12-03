import { Injectable } from '@angular/core';
import { KarterDTO } from '../dto/karterDTO';

@Injectable({
    providedIn: 'root'
})
export class RankingService {

    constructor() { }

    sortByRanking(karters: KarterDTO[]): KarterDTO[] {
        return [...karters].sort((a, b) => {
            if (b.points !== a.points) {
                return b.points - a.points;
            }
            return b.victory - a.victory;
        });
    }

    getCupImage(rank: number): string {
        const path = 'http://localhost:8080/images/ranks/';
        switch (rank) {
            case 1: return path + 'golden-cup.png';
            case 2: return path + 'silver-cup.png';
            case 3: return path + 'bronze-cup.png';
            default: return '';
        }
    }

    hasCup(rank: number): boolean {
        return rank != null && (rank === 1 || rank === 2 || rank === 3);
    }
}
