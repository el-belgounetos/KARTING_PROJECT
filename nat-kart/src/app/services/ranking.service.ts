import { Injectable, inject } from '@angular/core';
import { RankingDTO } from '../dto/rankingDTO';
import { ImageService } from './image.service';

@Injectable({
    providedIn: 'root'
})
export class RankingService {

    private imageService = inject(ImageService);
    constructor() { }

    sortByRanking(karters: RankingDTO[]): RankingDTO[] {
        return [...karters].sort((a, b) => {
            if (b.points !== a.points) {
                return b.points - a.points;
            }
            return b.victory - a.victory;
        });
    }

    getCupImage(rank: number): string {
        switch (rank) {
            case 1: return this.imageService.getRankImageUrl('golden-cup.png');
            case 2: return this.imageService.getRankImageUrl('silver-cup.png');
            case 3: return this.imageService.getRankImageUrl('bronze-cup.png');
            default: return '';
        }
    }

    hasCup(rank: number): boolean {
        return rank != null && (rank === 1 || rank === 2 || rank === 3);
    }
}
