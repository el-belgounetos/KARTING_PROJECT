import { Component, OnInit, signal, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { RankingDTO } from '../../dto/rankingDTO';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ApiService } from '../../services/api.service';
import { RankingService } from '../../services/ranking.service';
import { ImageService } from '../../services/image.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ranking',
  imports: [ImageModule, ButtonModule, TableModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent implements OnInit {
  // Signal for reactive state
  ranks = signal<RankingDTO[]>([]);
  showMobileSearch = signal<boolean>(false);

  private apiService = inject(ApiService);
  private rankingService = inject(RankingService);
  public imageService = inject(ImageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    // Poll every 5 seconds for auto-refresh, starting immediately
    interval(5000)
      .pipe(
        startWith(0),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.getAllRanks();
      });
  }

  public getAllRanks() {
    this.apiService.get<RankingDTO[]>('ranks').subscribe(ranksData => {
      if (ranksData) {
        this.ranks.set(this.rankingService.sortByRanking(ranksData));
      }
    });
  }

  public getRankCup(rank: number): string {
    return this.rankingService.getCupImage(rank);
  }

  public isCups(rank: number): boolean {
    return this.rankingService.hasCup(rank);
  }

  public onExport() {
    this.apiService.getBlob('excel').subscribe((blob: Blob | null) => {
      if (blob) {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'classement.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    });
  }

  public toggleMobileSearch() {
    this.showMobileSearch.set(!this.showMobileSearch());
  }
}
