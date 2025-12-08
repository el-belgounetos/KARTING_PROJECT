import { Component, OnInit, signal, computed, inject, ChangeDetectionStrategy, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  history = signal<HistoryDTO[]>([]);

  selectedRank = signal<RankingDTO | null>(null);
  selectedConsole = signal<ConsoleDTO | null>(null);
  selectedCups = signal<CupsDTO | null>(null);
  valueToAdd = signal<number>(0);
  victory = signal<boolean>(false);
  isHistoryVisible = signal<boolean>(true);

  // Computed signals for button state
  isUpdateButtonDisabled = computed(() => {
    const val = this.valueToAdd();
    const rank = this.selectedRank()?.name;
    const consoleName = this.selectedConsole()?.name;
    const cup = this.selectedCups()?.name;

    return val === 0 || !rank || !consoleName || !cup;
  });

  private apiService = inject(ApiService);
  public loadingService = inject(LoadingService);
  private notificationService = inject(NotificationService);
  public imageService = inject(ImageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.loadRanks();
    this.loadConsoles();
  }

  private loadRanks() {
    this.apiService.get<RankingDTO[]>('ranks')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(ranks => {
        if (ranks) {
          this.ranks.set(ranks);
          const currentRank = this.selectedRank();
          if (currentRank && currentRank.name) {
            this.selectKarterByName(currentRank.name);
          } else if (ranks.length > 0) {
            this.selectNewRank(ranks[0]);
          }
        }
      });
  }

  private loadConsoles() {
    this.apiService.get<ConsoleDTO[]>('consoles')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(consoles => {
        if (consoles) this.consoles.set(consoles);
      });
  }

  selectNewRank(selectedRank: RankingDTO) {
    this.selectedRank.set(selectedRank);
    this.loadHistoryForPlayer(selectedRank.name);
  }

  updatePlayer() {
    const rank = this.selectedRank();
    if (!this.canUpdate() || !rank) return;

    this.loadingService.show();

    // Create a copy to update
    const updatedRank = { ...rank };
    updatedRank.points += this.valueToAdd();
    if (this.victory()) updatedRank.victory++;

    this.apiService.post('ranks', updatedRank)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.notificationService.success('Mise à jour réussie', 'Les points ont bien été mis à jour');
          this.saveHistory();
          this.resetForm();
        },
        error: () => {
          this.resetForm();
        }
      });
  }

  private saveHistory() {
    const entry = this.createHistoryEntry();
    this.apiService.post('history', entry)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          if (response) {
            this.notificationService.info('Historique', 'Historique mis à jour');
            if (entry.player && entry.player.name) {
              this.loadHistoryForPlayer(entry.player.name);
            }
          }
        },
        error: () => {
          // Error handled by ApiService
        }
      });
  }

  private createHistoryEntry(): HistoryDTO {
    return {
      player: this.selectedRank()!,
      console: this.selectedConsole()!,
      cups: this.selectedCups()!,
      points: this.valueToAdd(),
      victory: this.victory()
    };
  }

  private canUpdate(): boolean {
    return !this.isUpdateButtonDisabled();
  }

  private selectKarterByName(name: string) {
    const karter = this.ranks().find(rank => rank.name === name);
    if (karter) {
      this.selectedRank.set(karter);
      this.loadHistoryForPlayer(karter.name);
    }
  }

  private loadHistoryForPlayer(playerName: string) {
    if (!playerName) {
      this.history.set([]);
      return;
    }
    this.apiService.get<HistoryDTO[]>(`history/${playerName}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (history) => {
          if (history) {
            this.history.set(history);
          } else {
            this.history.set([]);
          }
        },
        error: () => {
          this.history.set([]);
        }
      });
  }

  // Computed signals
  cups = computed(() => {
    const currentConsole = this.selectedConsole();
    const currentHistory = this.history();
    if (!currentConsole || !currentConsole.cups) return [];

    return currentConsole.cups.filter(cup =>
      !currentHistory.some(entry => entry.cups.name === cup.name)
    );
  });

  // ... (existing code)

  onConsoleChange(val: ConsoleDTO | null) {
    this.selectedConsole.set(val);
    this.selectedCups.set(null);
  }

  // Removed old onConsoleSelected and getAvailableCups as they are replaced by the computed signal logic

  private resetForm() {
    this.loadRanks();
    this.valueToAdd.set(0);
    this.loadingService.hide();
    this.victory.set(false);
    this.selectedCups.set(null);
    this.selectedConsole.set(null);
    const currentRank = this.selectedRank();
    if (currentRank && currentRank.name) {
      this.loadHistoryForPlayer(currentRank.name);
    }
  }

  deleteHistory(entry: HistoryDTO) {
    this.apiService.delete(`history/${entry.id}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(response => {
        if (response !== null) {
          this.notificationService.info('Historique', 'Ligne supprimée');
        }
        this.resetForm();
      });
  }

  toggleHistory() {
    this.isHistoryVisible.update(v => !v);
  }
}
