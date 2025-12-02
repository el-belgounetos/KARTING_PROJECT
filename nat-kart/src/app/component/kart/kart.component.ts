import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';


@Component({
  selector: 'app-kart',
  imports: [
    CommonModule,
    FormsModule,
    ImageModule,
    ToastModule,
    BadgeModule,
    TooltipModule,
    ScrollPanelModule,
    InputNumberModule,
    ButtonModule
  ],
  templateUrl: './kart.component.html',
  styleUrl: './kart.component.scss',
  providers: [MessageService]
})
export class KartComponent implements OnInit {
  constructor(private http: HttpClient, private messageService: MessageService) { }

  public avatars: string[] = [];
  public excludeAvatars: string[] = [];
  public avatar: string = 'unknown.png';
  public isLoading: boolean = false;
  public isAnimating: boolean = false;
  public playerCount: number = 1;
  public drawnPlayers: string[] = [];

  ngOnInit() {
    this.getAllInfos();
  }

  public onSpin(): void {
    // Validate player count against current avatars
    if (this.playerCount < 1) {
      this.messageService.add({ severity: 'warn', summary: 'Nombre invalide', detail: 'Le nombre de joueurs doit être au moins 1.' });
      return;
    }

    if (this.playerCount > this.avatars.length) {
      this.messageService.add({ severity: 'warn', summary: 'Pas assez de joueurs', detail: `Il n'y a que ${this.avatars.length} joueur(s) disponible(s).` });
      return;
    }

    this.isLoading = true;
    this.isAnimating = true;
    this.drawnPlayers = [];

    // Store the list before drawing
    const availableAvatars = [...this.avatars];

    // Draw immediately but don't show yet
    const selectedPlayers = this.getRandomAvatars(this.playerCount, availableAvatars);

    // Start animation, pass selected players
    this.displayAnimation(availableAvatars, selectedPlayers);
  }

  private displayAnimation(availableList: string[], selectedPlayers: string[]): void {
    let index = 0;
    let timer = 100;
    let interval: any;

    try {
      const audio = new Audio();
      audio.src = '/assets/soundeffect/item-box.mp3';
      audio.load();
      audio.play().catch(() => { });
    } catch (e) { }

    const startInterval = () => {
      interval = setInterval(() => {
        // Animate through ALL available avatars
        this.avatar = availableList[index % availableList.length];
        index++;
      }, timer);
    };

    startInterval();

    setTimeout(() => {
      clearInterval(interval);
      timer = 300;
      setTimeout(() => {
        clearInterval(interval);

        // Animation done - show drawn players
        this.isAnimating = false;
        this.drawnPlayers = selectedPlayers;

        // Exclude all drawn players sequentially
        this.excludePlayersSequentially(selectedPlayers);

      }, 1200);
      startInterval();
    }, 2200);
  }

  private excludePlayersSequentially(players: string[]): void {
    if (!players || players.length === 0) {
      this.isLoading = false;
      return;
    }

    // Exclude players one by one to avoid overwhelming the server
    const excludeNext = (index: number) => {
      if (index >= players.length) {
        // All done
        this.messageService.add({
          severity: 'success',
          summary: 'Tirage réussi',
          detail: `${players.length} joueur(s) tiré(s) !`
        });
        this.getAllInfos();
        this.isLoading = false;
        return;
      }

      const player = players[index];
      this.http.post('http://localhost:8080/exclude/' + this.formatAvatarWithoutSpecialCaracters(player), {})
        .subscribe(
          () => {
            // Move to next player
            excludeNext(index + 1);
          },
          (error) => {
            console.error('Error excluding player:', player, error);
            // Continue with next player even if one fails
            excludeNext(index + 1);
          }
        );
    };

    // Start the chain
    excludeNext(0);
  }

  private getRandomAvatars(count: number, sourceList: string[]): string[] {
    if (sourceList.length === 0 || count <= 0) {
      return [];
    }

    // Create a copy to avoid modifying original array
    const availableAvatars = [...sourceList];
    const selected: string[] = [];

    // Draw 'count' random avatars without replacement
    const actualCount = Math.min(count, availableAvatars.length);
    for (let i = 0; i < actualCount; i++) {
      const randomIndex = Math.floor(Math.random() * availableAvatars.length);
      selected.push(availableAvatars[randomIndex]);
      availableAvatars.splice(randomIndex, 1);
    }

    return selected;
  }

  public resetExcludeAvatars(): void {
    this.http.post('http://localhost:8080/exclude/clear', {})
      .subscribe(
        () => {
          this.messageService.add({ severity: 'info', summary: 'Reset validé', detail: 'Le pool a bien été reset.' });
          this.drawnPlayers = [];
          this.isAnimating = false;
          this.getAllInfos();
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors du reset.' });
        }
      );
  }

  private getCaracters(): void {
    this.http.get('http://localhost:8080/personnages')
      .subscribe(
        (response) => {
          if (response == null) {
            this.avatars = [];
          } else {
            this.avatars = response as [];
          }
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
      );
  }

  private getExcludeCaracters(): void {
    this.http.get('http://localhost:8080/personnages/exclude')
      .subscribe(
        (response) => {
          if (response == null) {
            this.excludeAvatars = [];
          } else {
            this.excludeAvatars = response as [];
          }
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
      );
  }

  public introduceAvatarByName(name: string): void {
    this.http.post('http://localhost:8080/introduce/' + this.formatAvatarWithoutSpecialCaracters(name), {})
      .subscribe(
        () => {
          this.messageService.add({ severity: 'info', summary: 'Ajout validé', detail: 'Le pokémon a bien été réintroduit.' });
          this.getAllInfos();
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la réintroduction.' });
        }
      );
  }

  private getAllInfos(): void {
    this.getCaracters();
    this.getExcludeCaracters();
  }

  private formatAvatarWithoutSpecialCaracters(name: string): string {
    return name.replace("/images/", "").replace(".png", "");
  }
}
