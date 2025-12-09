import { Injectable, inject } from '@angular/core';
import { RankingDTO } from '../dto/rankingDTO';
import { ImageService } from './image.service';

@Injectable({
    providedIn: 'root'
})
export class RankingService {

    private imageService = inject(ImageService);

    sortByRanking(karters: RankingDTO[]): RankingDTO[] {
        return [...karters].sort((a, b) => {
            if (b.points !== a.points) {
                return b.points - a.points;
            }
            return b.victory - a.victory;
        });
    }

    getCupImage(rank: number): string {
        const cups = ['golden-cup.png', 'silver-cup.png', 'bronze-cup.png'];
        return (rank >= 1 && rank <= 3)
            ? this.imageService.getRankImageUrl(cups[rank - 1])
            : '';
    }

    hasCup(rank: number): boolean {
        return rank >= 1 && rank <= 3;
    }
}
