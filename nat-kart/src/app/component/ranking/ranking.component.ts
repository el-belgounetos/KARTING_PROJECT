import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { KarterDTO } from '../../dto/karterDTO';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../services/api.service';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  imports: [ImageModule, ButtonModule, TableModule],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent implements OnInit, OnDestroy {
  // Signal for reactive state
  ranks = signal<KarterDTO[]>([]);

  private pollingInterval: ReturnType<typeof setInterval> | undefined;
  private apiService = inject(ApiService);
  private rankingService = inject(RankingService);

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
    this.apiService.get<KarterDTO[]>('ranks').subscribe(ranksData => {
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
    this.apiService.getBlob('ranks/excel').subscribe((blob: Blob | null) => {
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
}
