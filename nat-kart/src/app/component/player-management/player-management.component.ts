import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { NotificationService } from '../../services/notification.service';
import { PlayerDTO } from '../../dto/playerDTO';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ConfirmationService } from 'primeng/api';

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

  // Signals for reactive state
  availableImages = signal<string[]>([]);
  players = signal<PlayerDTO[]>([]);

  isEditMode: boolean = false;
  selectedTabIndex: string = "0"; // "0" = List, "1" = Create/Edit
  validationErrors: { [key: string]: string } = {};

  private apiService = inject(ApiService);
  public loadingService = inject(LoadingService);
  private notificationService = inject(NotificationService);
  private confirmationService = inject(ConfirmationService);

  ngOnInit() {
    this.loadImages();
    this.loadPlayers();
  }

  loadPlayers() {
    this.apiService.get<PlayerDTO[]>('players').subscribe({
      next: (data) => {
        console.log('Players loaded:', data);
        if (data) {
          this.players.set(data);
          if (!this.isEditMode) {
            this.selectedTabIndex = this.players().length === 0 ? "1" : "0";
          }
        }
      },
      error: (err) => {
        console.error('Error loading players:', err);
        if (!this.isEditMode) {
          this.selectedTabIndex = "1";
        }
      }
    });
  }

  loadImages() {
    this.apiService.get<string[]>('characters').subscribe(images => {
      if (images) {
        this.availableImages.set(images);
      }
    });
  }

  selectImage(image: string) {
    this.player.picture = image;
  }

  onSubmit() {
    this.validationErrors = {};

    if (!this.isValid()) {
      this.notificationService.warn('Attention', 'Veuillez remplir tous les champs obligatoires.');
      return;
    }

    this.loadingService.show();

    const apiCall = this.isEditMode
      ? this.apiService.put('players', this.player)
      : this.apiService.post('players', this.player);

    apiCall.subscribe({
      next: (response) => {
        this.notificationService.success(
          'Succès',
          this.isEditMode ? 'Joueur modifié avec succès!' : 'Joueur créé avec succès!'
        );
        this.resetForm();
        this.loadImages();
        this.loadPlayers();
        this.selectedTabIndex = "0";
        this.loadingService.hide();
      },
      error: (err: any) => {
        if (err?.error?.errors) {
          this.validationErrors = err.error.errors;
          const errorCount = Object.keys(err.error.errors).length;
          this.notificationService.error(
            'Erreurs de validation',
            `${errorCount} champ(s) invalide(s). Veuillez corriger les erreurs.`
          );
        } else {
          const errorMessage = err.error?.message || 'Une erreur est survenue';
          this.notificationService.error('Erreur', errorMessage);
        }
        this.loadingService.hide();
      }
    });
  }

  isValid(): boolean {
    return !!(
      this.player.name &&
      this.player.firstname &&
      this.player.email &&
      this.player.pseudo
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
    this.validationErrors = {};
    this.isEditMode = false;
  }

  editPlayer(player: PlayerDTO) {
    this.player = { ...player };
    this.validationErrors = {};
    this.isEditMode = true;
    this.selectedTabIndex = "1";
  }

  deletePlayer(player: PlayerDTO) {
    this.confirmationService.confirm({
      message: `Êtes-vous sûr de vouloir supprimer ${player.pseudo} ?`,
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.apiService.delete(`players/${player.pseudo}`).subscribe({
          next: () => {
            this.notificationService.success('Succès', 'Joueur supprimé avec succès');
            this.loadPlayers();
            this.loadImages();
          },
          error: (err) => {
            console.error('Error deleting player:', err);
            this.notificationService.error('Erreur', 'Impossible de supprimer le joueur');
          }
        });
      }
    });
  }

  cancelEdit() {
    this.resetForm();
    this.selectedTabIndex = "0";
  }
}
