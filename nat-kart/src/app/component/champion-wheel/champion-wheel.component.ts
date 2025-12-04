import { Component, OnInit } from '@angular/core';
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
  avatars: string[] = [];
  excludeAvatars: string[] = [];
  drawnPlayers: string[] = [];
  avatar: string = '';
  playerCount: number = 1;
  isLoading = false;
  isAnimating = false;
  hasPlayers: boolean = false;
  players: any[] = [];

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.reloadPool();
  }

  checkPlayers() {
    this.apiService.get<any[]>('players').subscribe(players => {
      this.players = players || [];
      this.hasPlayers = this.players.length > 0;

      // Filter out avatars that are already assigned to players
      this.filterAvailableAvatars();

      if (this.hasPlayers) {
        // Count players WITHOUT images
        const playersWithoutImages = this.players.filter(p => !p.picture || p.picture === '').length;

        // Ensure max spins doesn't exceed players without images or available avatars
        this.playerCount = Math.min(playersWithoutImages, this.avatars.length > 0 ? this.avatars.length : 1);
      }
    });
  }

  loadCharacters() {
    this.apiService.get<string[]>('characters').subscribe(data => {
      if (data) {
        this.avatars = data;
        // After loading characters, check players to filter assigned ones
        this.checkPlayers();
      }
    });
  }

  filterAvailableAvatars() {
    if (this.players.length > 0 && this.avatars.length > 0) {
      const assignedPictures = this.players
        .map(p => p.picture)
        .filter(p => p != null && p !== '');

      console.log('Assigned pictures:', assignedPictures);
      console.log('Avatars before filter:', this.avatars);

      // ADD ASSIGNED PICTURES TO EXCLUDEAVATARS FOR DISPLAY IN "SONT DEJA PASSES"
      this.excludeAvatars = [...assignedPictures];

      this.avatars = this.avatars.filter(avatar => !assignedPictures.includes(avatar));

      console.log('Avatars after filter:', this.avatars);
      console.log('ExcludeAvatars:', this.excludeAvatars);

      // Update displayed avatar if current one was removed or not set
      if (this.avatars.length > 0) {
        if (!this.avatar || !this.avatars.includes(this.avatar)) {
          this.avatar = this.avatars[0];
        }
      }
    }
  }

  canSpin(): boolean {
    const playersWithoutImages = this.players.filter(p => !p.picture || p.picture === '').length;
    return this.avatars.length > 0 && this.hasPlayers && playersWithoutImages > 0;
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
    const playersWithoutImages = this.players.filter(p => !p.picture || p.picture === '').length;
    if (this.playerCount > playersWithoutImages) {
      this.playerCount = playersWithoutImages;
      this.messageService.add({
        severity: 'info',
        summary: 'Ajustement',
        detail: `Le nombre de tirages a été ajusté à ${this.playerCount} (nombre de joueurs sans image).`
      });
    }

    this.isLoading = true;
    this.isAnimating = true;
    this.drawnPlayers = [];

    // Animation loop
    let counter = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.avatars.length);
      this.avatar = this.avatars[randomIndex];
      counter++;

      if (counter >= maxSpins) {
        clearInterval(interval);
        this.performDraw();
      }
    }, 100);
  }

  private performDraw() {
    // Draw unique avatars based on playerCount
    const available = [...this.avatars];
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

    this.drawnPlayers = drawn;

    // Assign drawn avatars to players WITHOUT images
    const playersWithoutImages = this.players.filter(p => !p.picture || p.picture === '');
    for (let i = 0; i < drawn.length; i++) {
      if (i < playersWithoutImages.length) {
        playersWithoutImages[i].picture = drawn[i];
        this.updatePlayer(playersWithoutImages[i]);
      }
    }

    // Update excluded avatars
    this.drawnPlayers.forEach(player => {
      this.excludeAvatars.push(player);
      this.avatars = this.avatars.filter(a => a !== player);
    });

    this.isLoading = false;
    this.isAnimating = false;

    // Update displayed avatar to first drawn if single player, or just stop animation
    if (this.drawnPlayers.length === 1) {
      this.avatar = this.drawnPlayers[0];
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
    // Unassign images from all players
    this.players.forEach(player => {
      if (player.picture) {
        player.picture = '';
        this.updatePlayer(player);
      }
    });

    // Reset the pools
    this.avatars = [...this.avatars, ...this.excludeAvatars];
    this.excludeAvatars = [];

    this.messageService.add({
      severity: 'info',
      summary: 'Reset',
      detail: 'La pool a été réinitialisée et les images désassignées'
    });

    // Reload to refresh everything
    setTimeout(() => this.reloadPool(), 500);
  }

  reloadPool() {
    this.loadCharacters(); // This will chain call checkPlayers and filterAvailableAvatars
    this.messageService.add({
      severity: 'info',
      summary: 'Actualisation',
      detail: 'La liste des joueurs et des avatars a été actualisée'
    });
  }

  introduceAvatarByName(name: string) {
    // Find player with this picture and remove it
    const playerWithPicture = this.players.find(p => p.picture === name);
    if (playerWithPicture) {
      playerWithPicture.picture = '';
      this.updatePlayer(playerWithPicture);
    }

    this.excludeAvatars = this.excludeAvatars.filter(a => a !== name);
    this.avatars.push(name);
  }

  getPlayersWithoutImages(): number {
    return this.players.filter(p => !p.picture || p.picture === '').length;
  }
}
