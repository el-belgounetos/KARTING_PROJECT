import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../services/api.service';
import { MessageService } from 'primeng/api';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-champion-wheel',
  imports: [
    CommonModule, FormsModule, ImageModule, ButtonModule, InputNumberModule,
    ScrollPanelModule, BadgeModule, ToastModule, TooltipModule
  ],
  templateUrl: './champion-wheel.component.html',
  styleUrl: './champion-wheel.component.scss'
})
export class ChampionWheelComponent implements OnInit {
  // Signals for reactive state
  avatars = signal<string[]>([]);
  excludeAvatars = signal<string[]>([]);
  drawnPlayers = signal<string[]>([]);
  players = signal<any[]>([]);

  // Regular properties
  avatar: string = '';
  playerCount: number = 1;
  isAnimating = false;
  hasPlayers: boolean = false;

  private apiService = inject(ApiService);
  private messageService = inject(MessageService);
  public loadingService = inject(LoadingService);

  ngOnInit() {
    this.reloadPool();
  }

  checkPlayers() {
    this.apiService.get<any[]>('players').subscribe(players => {
      const playerList = players || [];
      this.players.set(playerList);
      this.hasPlayers = playerList.length > 0;

      if (this.hasPlayers) {
        // Count players WITHOUT images
        const playersWithoutImages = playerList.filter(p => !p.picture || p.picture === '').length;

        // Ensure max spins doesn't exceed players without images or available avatars
        this.playerCount = Math.min(playersWithoutImages, this.avatars().length > 0 ? this.avatars().length : 1);
      }
    });
  }

  loadCharacters() {
    // Load available avatars from backend (already filtered by backend)
    this.apiService.get<string[]>('characters').subscribe(data => {
      if (data) {
        this.avatars.set(data);

        // Update displayed avatar if not set
        const currentAvatars = this.avatars();
        if (currentAvatars.length > 0 && (!this.avatar || !currentAvatars.includes(this.avatar))) {
          this.avatar = currentAvatars[0];
        }
      }
    });
  }

  loadExcludedCharacters() {
    // Load excluded avatars from backend
    this.apiService.get<string[]>('characters/exclude').subscribe(data => {
      if (data) {
        this.excludeAvatars.set(data);
      }
    });
  }

  canSpin(): boolean {
    const playerList = this.players();
    const playersWithoutImages = playerList.filter(p => !p.picture || p.picture === '').length;
    return this.avatars().length > 0 && this.hasPlayers && playersWithoutImages > 0;
  }

  onSpin() {
    if (!this.canSpin()) {
      if (!this.hasPlayers) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Attention',
          detail: 'Aucun joueur n\'a été créé. Veuillez créer des joueurs avant de lancer la roue.'
        });
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Attention',
          detail: 'Tous les joueurs ont déjà une image assignée.'
        });
      }
      return;
    }

    // Force clamp playerCount to players without images
    const playerList = this.players();
    const playersWithoutImages = playerList.filter(p => !p.picture || p.picture === '').length;
    if (this.playerCount > playersWithoutImages) {
      this.playerCount = playersWithoutImages;
      this.messageService.add({
        severity: 'info',
        summary: 'Ajustement',
        detail: `Le nombre de tirages a été ajusté à ${this.playerCount} (nombre de joueurs sans image).`
      });
    }

    this.loadingService.show();
    this.isAnimating = true;
    this.drawnPlayers.set([]);

    // Animation loop
    let counter = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      const currentAvatars = this.avatars();
      const randomIndex = Math.floor(Math.random() * currentAvatars.length);
      this.avatar = currentAvatars[randomIndex];
      counter++;

      if (counter >= maxSpins) {
        clearInterval(interval);
        this.performDraw();
      }
    }, 100);
  }

  private performDraw() {
    // Draw unique avatars based on playerCount
    const available = [...this.avatars()];
    const drawn: string[] = [];

    // Safety check: ensure we don't draw more than available avatars or players
    const countToDraw = Math.min(this.playerCount, available.length);

    for (let i = 0; i < countToDraw; i++) {
      if (available.length === 0) break;
      const randomIndex = Math.floor(Math.random() * available.length);
      const selected = available[randomIndex];
      drawn.push(selected);
      available.splice(randomIndex, 1); // Remove from available for this draw
    }

    this.drawnPlayers.set(drawn);

    // Assign drawn avatars to players WITHOUT images
    const playerList = this.players();
    const playersWithoutImages = playerList.filter(p => !p.picture || p.picture === '');
    for (let i = 0; i < drawn.length; i++) {
      if (i < playersWithoutImages.length) {
        playersWithoutImages[i].picture = drawn[i];
        this.updatePlayer(playersWithoutImages[i]);
      }
    }

    // Backend automatically manages exclusion via CharacterService
    // Reload data to get updated available and excluded lists
    setTimeout(() => {
      this.loadCharacters();
      this.loadExcludedCharacters();
      this.checkPlayers();
    }, 500);

    this.loadingService.hide();
    this.isAnimating = false;

    // Update displayed avatar to first drawn if single player, or just stop animation
    const drawnList = this.drawnPlayers();
    if (drawnList.length === 1) {
      this.avatar = drawnList[0];
    }
  }

  updatePlayer(player: any) {
    this.apiService.put('players', player).subscribe({
      error: (err: any) => {
        console.error('Error updating player:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: `Impossible de mettre à jour l'avatar pour ${player.pseudo}`
        });
      }
    });
  }

  resetExcludeAvatars() {
    // Call backend to clear exclusions and unassign player images
    this.apiService.post('characters/exclude/clear', {}).subscribe({
      next: () => {
        // Unassign images from all players
        const playerList = this.players();
        playerList.forEach(player => {
          if (player.picture) {
            player.picture = '';
            this.updatePlayer(player);
          }
        });

        this.messageService.add({
          severity: 'info',
          summary: 'Reset',
          detail: 'La pool a été réinitialisée et les images désassignées'
        });

        // Reload to refresh everything
        setTimeout(() => this.reloadPool(), 500);
      },
      error: (err) => {
        console.error('Error resetting pool:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de réinitialiser la pool'
        });
      }
    });
  }

  reloadPool() {
    this.loadCharacters(); // Load available avatars
    this.loadExcludedCharacters(); // Load excluded avatars
    this.checkPlayers(); // Load players data
    this.messageService.add({
      severity: 'info',
      summary: 'Actualisation',
      detail: 'La liste des joueurs et des avatars a été actualisée'
    });
  }

  introduceAvatarByName(name: string) {
    // Call backend to re-introduce avatar
    this.apiService.post(`characters/include/${name.replace('.png', '')}`, {}).subscribe({
      next: () => {
        // Find player with this picture and remove it
        const playerList = this.players();
        const playerWithPicture = playerList.find(p => p.picture === name);
        if (playerWithPicture) {
          playerWithPicture.picture = '';
          this.updatePlayer(playerWithPicture);
        }

        // Reload to refresh the pools
        setTimeout(() => this.reloadPool(), 300);
      },
      error: (err) => {
        console.error('Error introducing avatar:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de réintroduire l\'avatar'
        });
      }
    });
  }

  getPlayersWithoutImages(): number {
    const playerList = this.players();
    return playerList.filter(p => !p.picture || p.picture === '').length;
  }
}
