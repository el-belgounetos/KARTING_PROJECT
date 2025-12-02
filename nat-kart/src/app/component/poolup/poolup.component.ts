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
  selector: 'app-poolup',
  imports: [
    CommonModule, ButtonModule, SelectModule, ToastModule, InputNumberModule,
    ToggleSwitchModule, BadgeModule, TableModule, ScrollPanelModule, FormsModule
  ],
  templateUrl: './poolup.component.html',
  styleUrl: './poolup.component.scss'
})
export class PoolupComponent implements OnInit {
  ranks: KarterDTO[] = [];
  selectedRank = new KarterDTO();
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
        if (this.selectedRank.name) {
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
    this.selectedRank = selectedRank;
    this.loadHistoryForPlayer(this.selectedRank.name);
  }

  updatePlayer() {
    if (!this.canUpdate()) return;

    this.loading = true;
    this.selectedRank.points += this.valueToAdd;
    if (this.victory) this.selectedRank.victory++;

    this.apiService.post('ranks', this.selectedRank).subscribe(response => {
      if (response) {
        this.messageService.add({
          severity: 'success',
          summary: 'Mise à jour réussie',
          detail: 'Les points ont bien été mis à jour'
        });
        this.saveHistory();
      }
      this.resetForm();
    });
  }

  private saveHistory() {
    const entry = this.createHistoryEntry();
    this.apiService.post('historique', entry).subscribe(response => {
      if (response) {
        this.messageService.add({
          severity: 'info',
          summary: 'Historique',
          detail: 'Historique mis à jour'
        });
        this.loadHistoryForPlayer(entry.player.name);
      }
    });
  }

  private createHistoryEntry(): HistoriqueDTO {
    const entry = new HistoriqueDTO();
    entry.player = this.selectedRank;
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
    this.apiService.get<HistoriqueDTO[]>(`historique/${playerName}`).subscribe(history => {
      if (history) this.historique = history;
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
    this.loadRanks();
    this.valueToAdd = 0;
    this.loading = false;
    this.victory = false;
    this.selectedCups = new CupsDTO();
    this.selectedConsole = new ConsoleDTO();
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
