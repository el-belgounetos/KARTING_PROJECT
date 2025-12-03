import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KarterDTO } from '../../dto/karterDTO';
import { ConsoleDTO } from '../../dto/consoleDTO';
import { CupsDTO } from '../../dto/cupsDTO';
import { HistoriqueDTO } from '../../dto/historiqueDTO';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ApiService } from '../../services/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-score-management',
  imports: [
    CommonModule, ButtonModule, SelectModule, ToastModule, InputNumberModule,
    ToggleSwitchModule, BadgeModule, TableModule, ScrollPanelModule, FormsModule
  ],
  templateUrl: './score-management.component.html',
  styleUrl: './score-management.component.scss'
})
export class ScoreManagementComponent implements OnInit {
  ranks: KarterDTO[] = [];
  selectedRank: KarterDTO | null = null; // No default selection
  consoles: ConsoleDTO[] = [];
  selectedConsole = new ConsoleDTO();
  cups: CupsDTO[] = [];
  selectedCups = new CupsDTO();
  valueToAdd = 0;
  loading = false;
  victory = false;
  historique: HistoriqueDTO[] = [];
  isHistoryVisible = true;

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadRanks();
    this.loadConsoles();
  }

  private loadRanks() {
    this.apiService.get<KarterDTO[]>('ranks').subscribe(ranks => {
      if (ranks) {
        this.ranks = ranks;
        // Only reload if a player was already selected
        if (this.selectedRank && this.selectedRank.name) {
          this.selectKarterByName(this.selectedRank.name);
        }
      }
    });
  }

  private loadConsoles() {
    this.apiService.get<ConsoleDTO[]>('consoles').subscribe(consoles => {
      if (consoles) this.consoles = consoles;
    });
  }

  selectNewRank(selectedRank: KarterDTO) {
    console.log('selectNewRank called with:', selectedRank.name);
    this.selectedRank = selectedRank;
    this.loadHistoryForPlayer(this.selectedRank.name);
  }

  updatePlayer() {
    if (!this.canUpdate() || !this.selectedRank) return;

    console.log('updatePlayer: Starting update for', this.selectedRank.name);
    this.loading = true;
    this.selectedRank.points += this.valueToAdd;
    if (this.victory) this.selectedRank.victory++;

    this.apiService.post('ranks', this.selectedRank).subscribe({
      next: (response) => {
        console.log('updatePlayer: POST /ranks response:', response);
        // Always show success message and save history, even if response is null
        this.messageService.add({
          severity: 'success',
          summary: 'Mise à jour réussie',
          detail: 'Les points ont bien été mis à jour'
        });
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
    console.log('saveHistory: Sending POST to /historique');
    this.apiService.post('historique', entry).subscribe({
      next: (response) => {
        console.log('saveHistory: Response received:', response);
        if (response) {
          this.messageService.add({
            severity: 'info',
            summary: 'Historique',
            detail: 'Historique mis à jour'
          });
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

  private createHistoryEntry(): HistoriqueDTO {
    const entry = new HistoriqueDTO();
    entry.player = this.selectedRank!; // Non-null assertion - safe because canUpdate checks
    entry.console = this.selectedConsole;
    entry.cups = this.selectedCups;
    entry.points = this.valueToAdd;
    entry.victory = this.victory;
    return entry;
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
    const karter = this.ranks.find(rank => rank.name === name);
    if (karter) {
      this.selectedRank = karter;
      this.loadHistoryForPlayer(karter.name);
    }
  }

  private loadHistoryForPlayer(playerName: string) {
    // Guard against null/undefined playerName
    if (!playerName) {
      console.warn('loadHistoryForPlayer called with null/undefined playerName');
      this.historique = [];
      return;
    }
    console.log('loadHistoryForPlayer: Making API call for', playerName);
    this.apiService.get<HistoriqueDTO[]>(`historique/${playerName}`).subscribe({
      next: (history) => {
        console.log('loadHistoryForPlayer: Received response:', history);
        if (history) {
          this.historique = history;
          console.log('loadHistoryForPlayer: historique updated, length:', this.historique.length);
        } else {
          console.warn('loadHistoryForPlayer: Response is null/undefined');
          this.historique = [];
        }
      },
      error: (err) => {
        console.error('loadHistoryForPlayer: API error:', err);
        this.historique = [];
      }
    });
  }

  onConsoleSelected() {
    this.loadConsoles();
    this.cups = this.selectedConsole?.name
      ? this.getAvailableCups(this.selectedConsole.cups)
      : [];
  }

  private getAvailableCups(allCups: CupsDTO[]): CupsDTO[] {
    return allCups.filter(cup =>
      !this.historique.some(entry => entry.cups.name === cup.name)
    );
  }

  private resetForm() {
    console.log('resetForm called, selectedRank:', this.selectedRank);
    this.loadRanks();
    this.valueToAdd = 0;
    this.loading = false;
    this.victory = false;
    this.selectedCups = new CupsDTO();
    this.selectedConsole = new ConsoleDTO();
    // Reload history for currently selected player
    if (this.selectedRank && this.selectedRank.name) {
      console.log('Reloading history for:', this.selectedRank.name);
      this.loadHistoryForPlayer(this.selectedRank.name);
    } else {
      console.log('No selected player to reload history for');
    }
  }

  deleteHistorique(entry: HistoriqueDTO) {
    this.apiService.delete(`historique/${entry.id}`).subscribe(response => {
      if (response !== null) {
        this.messageService.add({
          severity: 'info',
          summary: 'Historique',
          detail: 'Ligne supprimée'
        });
      }
      this.resetForm();
    });
  }
}
