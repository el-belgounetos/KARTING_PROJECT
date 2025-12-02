import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { KarterDTO } from '../../dto/karterDTO';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cup',
  imports: [ImageModule, ButtonModule, TableModule],
  templateUrl: './cup.component.html',
  styleUrl: './cup.component.scss',
  providers: [MessageService]
})
export class CupComponent implements OnInit {
  public ranks: KarterDTO[] = [];

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
    this.getAllRanks();
  }

  public getAllRanks() {
    this.http.get('http://localhost:8080/ranks')
      .subscribe(
        (response) => {
          if (response == null) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
          } else {
            // Sort by points (desc), then by victories (desc)
            this.ranks = (response as KarterDTO[]).sort((a, b) => {
              if (b.points !== a.points) {
                return b.points - a.points;
              }
              return b.victory - a.victory;
            });
          }
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
      );
  }

  public getRankCup(rank: number): string {
    const path = 'assets/cups/';
    switch (rank) {
      case 1: return path + 'golden-cup.png';
      case 2: return path + 'silver-cup.png';
      case 3: return path + 'bronze-cup.png';
      default: return '';
    }
  }

  public isCups(rank: number): boolean {
    return rank != null && (rank == 1 || rank == 2 || rank == 3);
  }

  public onExport() {
    this.http.get('http://localhost:8080/ranks/excel', { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'classement.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  }
}
