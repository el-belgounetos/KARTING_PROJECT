import { Component, OnInit, signal, inject, ChangeDetectionStrategy, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { NotificationService } from '../../services/notification.service';
import { ImageService } from '../../services/image.service';
import { PlayerDTO } from '../../dto/playerDTO';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-champion-wheel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ImageModule,
    ButtonModule,
    InputNumberModule,
    ScrollPanelModule,
    BadgeModule,
    TooltipModule
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
  isSpinning = signal<boolean>(false);

  // Animation signals
  avatar = signal<string>('');
  isAnimating = signal<boolean>(false);

  // Regular properties converted to Signals
  playerCount = signal<number>(1);
  hasPlayers = signal<boolean>(false);

  private apiService = inject(ApiService);
  private notificationService = inject(NotificationService);
  public loadingService = inject(LoadingService);
  public imageService = inject(ImageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.reloadPool();
  }

  checkPlayers() {
    this.apiService.get<any[]>('players')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(players => {
        const playerList = players || [];
        this.players.set(playerList);
        this.hasPlayers.set(playerList.length > 0);

        const maxAssignable = this.getMaxAssignable();
        if (this.playerCount() > maxAssignable) {
          this.playerCount.set(Math.max(1, maxAssignable));
        }
      });
  }

  loadCharacters() {
    this.apiService.get<string[]>('characters')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        if (data) {
          this.avatars.set(data);

          const currentAvatars = this.avatars();
          if (currentAvatars.length > 0 && (!this.avatar() || !currentAvatars.includes(this.avatar()))) {
            this.avatar.set(currentAvatars[0]);
          }
        }
      });
  }

  loadExcludedCharacters() {
    this.apiService.get<string[]>('characters/exclude')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        if (data) {
          this.excludeAvatars.set(data);
        }
      });
  }

  canSpin(): boolean {
    const playerList = this.players();
    const playersWithoutImages = playerList.filter(p => !p.picture || p.picture === '').length;
    return this.avatars().length > 0 && this.hasPlayers() && playersWithoutImages > 0;
  }

  onSpin() {
    if (!this.canSpin()) {
      if (!this.hasPlayers()) {
        this.notificationService.warn(
          'Attention',
          'Aucun joueur n\'a été créé. Veuillez créer des joueurs avant de lancer la roue.'
        );
      } else {
        this.notificationService.warn(
          'Attention',
          'Tous les joueurs ont déjà une image assignée.'
        );
      }
      return;
    }

    // Force clamp playerCount to players without images
    const playerList = this.players();
    const playersWithoutImages = playerList.filter(p => !p.picture || p.picture === '').length;
    if (this.playerCount() > playersWithoutImages) {
      this.playerCount.set(playersWithoutImages);
      this.notificationService.info(
        'Ajustement',
        `Le nombre de tirages a été ajusté à ${this.playerCount()} (nombre de joueurs sans image).`
      );
    }

    this.isSpinning.set(true);
    this.isAnimating.set(true);
    this.drawnPlayers.set([]);

    // Animation loop using RxJS
    const maxSpins = 20;

    interval(100)
      .pipe(
        take(maxSpins),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          const currentAvatars = this.avatars();
          const randomIndex = Math.floor(Math.random() * currentAvatars.length);
          this.avatar.set(currentAvatars[randomIndex]);
        },
        complete: () => {
          this.performDraw();
        }
      });
  }

  private performDraw() {
    // Draw unique avatars based on playerCount
    const available = [...this.avatars()];
    const drawn: string[] = [];

    // Safety check: ensure we don't draw more than available avatars or players
    const countToDraw = Math.min(this.playerCount(), available.length);

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
    // Using setTimeout here is acceptable as it's orchestrating a delayed refresh after animation/state update
    // Ideally could use a delay operator on an observable if we wanted strictly RxJS but setTimeout is pragmatic here.
    setTimeout(() => {
      this.loadCharacters();
      this.loadExcludedCharacters();
      this.checkPlayers();
    }, 500);

    this.isSpinning.set(false);
    this.isAnimating.set(false);

    // Update displayed avatar to first drawn if single player, or just stop animation
    const drawnList = this.drawnPlayers();
    if (drawnList.length === 1) {
      this.avatar.set(drawnList[0]);
    }
  }

  updatePlayer(player: PlayerDTO) {
    this.apiService.put('players', player)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        error: () => {
          this.notificationService.error(
            'Erreur',
            `Impossible de mettre à jour l'avatar pour ${player.pseudo}`
          );
        }
      });
  }

  resetExcludeAvatars() {
    this.apiService.post('characters/exclude/clear', {})
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          const playerList = this.players();
          playerList.forEach(player => {
            if (player.picture) {
              player.picture = '';
              this.updatePlayer(player);
            }
          });

          this.notificationService.info(
            'Reset',
            'La pool a été réinitialisée et les images désassignées'
          );

          setTimeout(() => this.reloadPool(), 500);
        },
        error: () => {
          this.notificationService.error(
            'Erreur',
            'Impossible de réinitialiser la pool'
          );
        }
      });
  }

  reloadPool() {
    this.loadCharacters(); // Load available avatars
    this.loadExcludedCharacters(); // Load excluded avatars
    this.checkPlayers(); // Load players data
    this.notificationService.info(
      'Actualisation',
      'La liste des joueurs et des avatars a été actualisée'
    );
  }

  introduceAvatarByName(name: string) {
    this.apiService.post(`characters/include/${name.replace('.png', '')}`, {})
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          const playerList = this.players();
          const playerWithPicture = playerList.find(p => p.picture === name);
          if (playerWithPicture) {
            playerWithPicture.picture = '';
            this.updatePlayer(playerWithPicture);
          }

          setTimeout(() => this.reloadPool(), 300);
        },
        error: () => {
          this.notificationService.error(
            'Erreur',
            'Impossible de réintroduire l\'avatar'
          );
        }
      });
  }

  getPlayersWithoutImages(): number {
    const playerList = this.players();
    return playerList.filter(p => !p.picture || p.picture === '').length;
  }

  getMaxAssignable(): number {
    const playersWithoutImages = this.getPlayersWithoutImages();
    const availableAvatars = this.avatars().length;
    return Math.min(playersWithoutImages, availableAvatars);
  }
}
