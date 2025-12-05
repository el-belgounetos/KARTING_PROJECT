import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RankingDTO } from '../../dto/rankingDTO';
import { ConsoleDTO } from '../../dto/consoleDTO';
import { CupsDTO } from '../../dto/cupsDTO';
import { HistoryDTO } from '../../dto/historyDTO';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { NotificationService } from '../../services/notification.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-score-management',
  imports: [
    CommonModule, ButtonModule, SelectModule, InputNumberModule,
    ToggleSwitchModule, BadgeModule, TableModule, ScrollPanelModule, FormsModule
  ],
  templateUrl: './score-management.component.html',
  styleUrl: './score-management.component.scss'
})
export class ScoreManagementComponent implements OnInit {
  // Signals for reactive state
  ranks = signal<RankingDTO[]>([]);
  consoles = signal<ConsoleDTO[]>([]);
  cups = signal<CupsDTO[]>([]);
  history = signal<HistoryDTO[]>([]);

  selectedRank: RankingDTO | null = null;
  selectedConsole: ConsoleDTO | null = null;
  selectedCups: CupsDTO | null = null;
  valueToAdd = 0;
  victory = false;
  isHistoryVisible = true;

  private apiService = inject(ApiService);
  public loadingService = inject(LoadingService);
  private notificationService = inject(NotificationService);
  public imageService = inject(ImageService);

  ngOnInit() {
    this.loadRanks();
    this.loadConsoles();
  }

  private loadRanks() {
    this.apiService.get<RankingDTO[]>('ranks').subscribe(ranks => {
      if (ranks) {
        this.ranks.set(ranks);
        // Only reload if a player was already selected
        if (this.selectedRank && this.selectedRank.name) {
          this.selectKarterByName(this.selectedRank.name);
        } else if (ranks.length > 0) {
          this.selectNewRank(ranks[0]);
        }
      }
    });
  }

  private loadConsoles() {
    this.apiService.get<ConsoleDTO[]>('consoles').subscribe(consoles => {
      if (consoles) this.consoles.set(consoles);
    });
  }

  selectNewRank(selectedRank: RankingDTO) {
    console.log('selectNewRank called with:', selectedRank.name);
    this.selectedRank = selectedRank;
    this.loadHistoryForPlayer(this.selectedRank.name);
  }

  updatePlayer() {
    if (!this.canUpdate() || !this.selectedRank) return;

    console.log('updatePlayer: Starting update for', this.selectedRank.name);
    this.loadingService.show();
    this.selectedRank.points += this.valueToAdd;
    if (this.victory) this.selectedRank.victory++;

    this.apiService.post('ranks', this.selectedRank).subscribe({
      next: (response) => {
        console.log('updatePlayer: POST /ranks response:', response);
        this.notificationService.success('Mise à jour réussie', 'Les points ont bien été mis à jour');
        console.log('updatePlayer: Calling saveHistory()');
        this.saveHistory();
        this.resetForm();
      },
      error: (err) => {
        console.error('updatePlayer: API error:', err);
        this.resetForm();
      }
    });
  }

  private saveHistory() {
    const entry = this.createHistoryEntry();
    console.log('saveHistory: Creating entry:', entry);
    console.log('saveHistory: Sending POST to /history');
    this.apiService.post('history', entry).subscribe({
      next: (response) => {
        console.log('saveHistory: Response received:', response);
        if (response) {
          this.notificationService.info('Historique', 'Historique mis à jour');
          // Only load history if player name exists
          if (entry.player && entry.player.name) {
            this.loadHistoryForPlayer(entry.player.name);
          }
        }
      },
      error: (err) => {
        console.error('saveHistory: API error:', err);
      }
    });
  }

  private createHistoryEntry(): HistoryDTO {
    return {
      player: this.selectedRank!,
      console: this.selectedConsole!,
      cups: this.selectedCups!,
      points: this.valueToAdd,
      victory: this.victory
    };
  }

  isUpdateButtonAvailable(): boolean {
    return this.valueToAdd === 0 ||
      !this.selectedRank?.name ||
      !this.selectedConsole?.name ||
      !this.selectedCups?.name;
  }

  private canUpdate(): boolean {
    return !this.isUpdateButtonAvailable();
  }

  private selectKarterByName(name: string) {
    const karter = this.ranks().find(rank => rank.name === name);
    if (karter) {
      this.selectedRank = karter;
      this.loadHistoryForPlayer(karter.name);
    }
  }

  private loadHistoryForPlayer(playerName: string) {
    if (!playerName) {
      console.warn('loadHistoryForPlayer called with null/undefined playerName');
      this.history.set([]);
      return;
    }
    console.log('loadHistoryForPlayer: Making API call for', playerName);
    this.apiService.get<HistoryDTO[]>(`history/${playerName}`).subscribe({
      next: (history) => {
        console.log('loadHistoryForPlayer: Received response:', history);
        if (history) {
          this.history.set(history);
          console.log('loadHistoryForPlayer: history updated, length:', this.history().length);
        } else {
          console.warn('loadHistoryForPlayer: Response is null/undefined');
          this.history.set([]);
        }
      },
      error: (err) => {
        console.error('loadHistoryForPlayer: API error:', err);
        this.history.set([]);
      }
    });
  }

  onConsoleSelected() {
    this.loadConsoles();
    this.cups.set(this.selectedConsole?.cups
      ? this.getAvailableCups(this.selectedConsole.cups)
      : []);
  }

  private getAvailableCups(allCups: CupsDTO[]): CupsDTO[] {
    const currentHistory = this.history();
    return allCups.filter(cup =>
      !currentHistory.some(entry => entry.cups.name === cup.name)
    );
  }

  private resetForm() {
    console.log('resetForm called, selectedRank:', this.selectedRank);
    this.loadRanks();
    this.valueToAdd = 0;
    this.loadingService.hide();
    this.victory = false;
    this.selectedCups = null;
    this.selectedConsole = null;
    // Reload history for currently selected player
    if (this.selectedRank && this.selectedRank.name) {
      console.log('Reloading history for:', this.selectedRank.name);
      this.loadHistoryForPlayer(this.selectedRank.name);
    } else {
      console.log('No selected player to reload history for');
    }
  }

  deleteHistory(entry: HistoryDTO) {
    this.apiService.delete(`history/${entry.id}`).subscribe(response => {
      if (response !== null) {
        this.notificationService.info('Historique', 'Ligne supprimée');
      }
      this.resetForm();
    });
  }
}
