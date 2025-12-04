import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ApiService } from '../../services/api.service';
import { PlayerDTO } from '../../dto/playerDTO';

import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-player-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ImageModule,
    ToastModule,
    TableModule,
    TabsModule
  ],
  templateUrl: './player-management.component.html',
  styleUrl: './player-management.component.scss'
})
export class PlayerManagementComponent implements OnInit {
  player: PlayerDTO = {
    name: '',
    firstname: '',
    age: 0,
    email: '',
    pseudo: '',
    picture: '',
    category: ''
  };

  availableImages: string[] = [];
  players: PlayerDTO[] = [];
  loading: boolean = false;
  isEditMode: boolean = false;
  selectedTabIndex: string = "0"; // "0" = List, "1" = Create/Edit
  validationErrors: { [key: string]: string } = {}; // Track field-specific errors

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadImages();
    this.loadPlayers();
  }

  loadPlayers() {
    this.apiService.get<PlayerDTO[]>('players').subscribe({
      next: (data) => {
        console.log('Players loaded:', data);
        if (data) {
          this.players = data;
          // If no players, show creation tab ("1"). Otherwise show list tab ("0")
          if (!this.isEditMode) {
            this.selectedTabIndex = this.players.length === 0 ? "1" : "0";
            console.log('Setting tab index to:', this.selectedTabIndex, 'Players count:', this.players.length);
            // Force change detection to update the tab UI
            this.cdr.detectChanges();
          }
        }
      },
      error: (err) => {
        console.error('Error loading players:', err);
        // If error loading, assume no players and show creation tab
        if (!this.isEditMode) {
          this.selectedTabIndex = "1";
          this.cdr.detectChanges();
        }
      }
    });
  }

  loadImages() {
    this.apiService.get<string[]>('characters').subscribe(images => {
      if (images) {
        this.availableImages = images;
      }
    });
  }

  selectImage(image: string) {
    this.player.picture = image;
  }

  onSubmit() {
    // Clear previous validation errors
    this.validationErrors = {};

    if (!this.isValid()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Attention',
        detail: 'Veuillez remplir tous les champs obligatoires.'
      });
      return;
    }

    this.loading = true;

    const apiCall = this.isEditMode
      ? this.apiService.put('players', this.player)
      : this.apiService.post('players', this.player);

    apiCall.subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: this.isEditMode ? 'Joueur modifié avec succès!' : 'Joueur créé avec succès!'
        });
        this.resetForm();
        this.loadImages();
        this.loadPlayers();
        this.selectedTabIndex = "0"; // Return to list
        this.loading = false;
      },
      error: (err: any) => {
        // Capture field-specific validation errors
        if (err?.error?.errors) {
          this.validationErrors = err.error.errors;

          // Display a summary toast for validation errors
          const errorCount = Object.keys(err.error.errors).length;
          this.messageService.add({
            severity: 'error',
            summary: 'Erreurs de validation',
            detail: `${errorCount} champ(s) invalide(s). Veuillez corriger les erreurs.`,
            life: 5000
          });
        } else {
          // Other errors
          const errorMessage = err.error?.message || 'Une erreur est survenue';
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: errorMessage
          });
        }
        this.loading = false;
      }
    });
  }

  isValid(): boolean {
    return !!(
      this.player.name &&
      this.player.firstname &&
      this.player.email &&
      this.player.pseudo
      // Picture is now optional
    );
  }

  resetForm() {
    this.player = {
      name: '',
      firstname: '',
      age: 0,
      email: '',
      pseudo: '',
      picture: '',
      category: ''
    };
    this.validationErrors = {}; // Clear validation errors
    this.isEditMode = false;
  }

  editPlayer(player: PlayerDTO) {
    this.player = { ...player }; // Clone to avoid direct modification
    this.validationErrors = {}; // Clear validation errors when editing
    this.isEditMode = true;
    this.selectedTabIndex = "1"; // Switch to form tab
  }

  deletePlayer(player: PlayerDTO) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${player.pseudo} ?`)) {
      this.apiService.delete(`players/${player.pseudo}`).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Joueur supprimé avec succès'
          });
          this.loadPlayers();
          this.loadImages(); // Refresh available images
        },
        error: (err) => {
          console.error('Error deleting player:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Impossible de supprimer le joueur'
          });
        }
      });
    }
  }

  cancelEdit() {
    this.resetForm();
    this.selectedTabIndex = "0";
    this.cdr.detectChanges();
  }
}
