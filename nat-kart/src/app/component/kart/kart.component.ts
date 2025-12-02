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
  selector: 'app-kart',
  imports: [
    CommonModule, FormsModule, ImageModule, ButtonModule, InputNumberModule,
    ScrollPanelModule, BadgeModule, ToastModule, TooltipModule
  ],
  templateUrl: './kart.component.html',
  styleUrl: './kart.component.scss'
})
export class KartComponent implements OnInit {
  avatars: string[] = [];
  excludeAvatars: string[] = [];
  drawnPlayers: string[] = [];
  avatar: string = '';
  playerCount: number = 1;
  isLoading = false;
  isAnimating = false;

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.apiService.get<string[]>('characters').subscribe(data => {
      if (data) {
        this.avatars = data;
        if (this.avatars.length > 0) {
          this.avatar = this.avatars[0];
        }
      }
    });
  }

  onSpin() {
    if (this.avatars.length === 0) return;

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
    // Draw unique players based on playerCount
    const available = [...this.avatars];
    const drawn: string[] = [];

    for (let i = 0; i < this.playerCount; i++) {
      if (available.length === 0) break;
      const randomIndex = Math.floor(Math.random() * available.length);
      const selected = available[randomIndex];
      drawn.push(selected);
      available.splice(randomIndex, 1); // Remove from available for this draw
    }

    this.drawnPlayers = drawn;

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

  resetExcludeAvatars() {
    this.avatars = [...this.avatars, ...this.excludeAvatars];
    this.excludeAvatars = [];
    this.messageService.add({
      severity: 'info',
      summary: 'Reset',
      detail: 'La pool a été réinitialisée'
    });
  }

  introduceAvatarByName(name: string) {
    this.excludeAvatars = this.excludeAvatars.filter(a => a !== name);
    this.avatars.push(name);
  }
}
