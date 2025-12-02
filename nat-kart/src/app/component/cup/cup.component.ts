import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { KarterDTO } from '../../dto/karterDTO';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../services/api.service';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-cup',
  imports: [ImageModule, ButtonModule, TableModule],
  templateUrl: './cup.component.html',
  styleUrl: './cup.component.scss'
})
export class CupComponent implements OnInit {
  public ranks: KarterDTO[] = [];

  constructor(
    private apiService: ApiService,
    private rankingService: RankingService
  ) { }

  ngOnInit() {
    this.getAllRanks();
  }

  public getAllRanks() {
    this.apiService.get<KarterDTO[]>('ranks').subscribe(ranks => {
      if (ranks) {
        this.ranks = this.rankingService.sortByRanking(ranks);
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
