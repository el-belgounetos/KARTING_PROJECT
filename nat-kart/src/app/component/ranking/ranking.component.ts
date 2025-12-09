import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
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

@Component({
  selector: 'app-ranking',
  imports: [ImageModule, ButtonModule, TableModule, InputTextModule, IconFieldModule, InputIconModule],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent implements OnInit, OnDestroy {
  // Signal for reactive state
  ranks = signal<RankingDTO[]>([]);
  showMobileSearch = signal<boolean>(false);

  private pollingInterval: ReturnType<typeof setInterval> | undefined;
  private apiService = inject(ApiService);
  private rankingService = inject(RankingService);
  public imageService = inject(ImageService);

  ngOnInit() {
    this.getAllRanks();
    // Poll every 5 seconds for auto-refresh
    this.pollingInterval = setInterval(() => {
      this.getAllRanks();
    }, 5000);
  }

  ngOnDestroy() {
    // Clean up interval when component is destroyed
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
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
