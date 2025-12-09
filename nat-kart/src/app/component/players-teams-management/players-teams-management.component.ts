import { Component, OnInit, signal, computed, inject, ChangeDetectionStrategy, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { NotificationService } from '../../services/notification.service';
import { PlayerDTO } from '../../dto/playerDTO';
import { TeamDTO } from '../../dto/teamDTO';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ConfirmationService } from 'primeng/api';
import { ImageService } from '../../services/image.service';
import { ImageUploadService } from '../../services/image-upload.service';
import { Select } from 'primeng/select';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-players-teams-management',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ImageModule,
    TableModule,
    TabsModule,
    Select,
    FileUpload
],
  templateUrl: './players-teams-management.component.html',
  styleUrl: './players-teams-management.component.scss'
})
export class PlayersTeamsManagementComponent implements OnInit {
  // Player state
  player: PlayerDTO = {
    name: '',
    firstname: '',
    age: 0,
    email: '',
    pseudo: '',
    picture: '',
    category: ''
  };

  // Team state
  team: TeamDTO = {
    name: '',
    logo: ''
  };

  // Signals for reactive state
  availableImages = signal<string[]>([]);
  availableLogos = signal<string[]>([]);
  players = signal<PlayerDTO[]>([]);
  teams = signal<TeamDTO[]>([]);

  isEditMode: boolean = false;
  isTeamEditMode: boolean = false;
  selectedTabIndex: string = "0";
  validationErrors: { [key: string]: string } = {};
  teamValidationErrors: { [key: string]: string } = {};

  // Getter functions for form validation (not computed)
  isValid(): boolean {
    return !!(this.player.name && this.player.firstname && this.player.email && this.player.pseudo);
  }

  isTeamValid(): boolean {
    return !!(this.team.name && this.team.name.length >= 2);
  }

  private apiService = inject(ApiService);
  public loadingService = inject(LoadingService);
  private notificationService = inject(NotificationService);
  private confirmationService = inject(ConfirmationService);
  public imageService = inject(ImageService);
  private imageUploadService = inject(ImageUploadService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.loadImages();
    this.loadPlayers();
    this.loadTeams();
    this.loadAvailableLogos();
  }

  loadPlayers() {
    this.apiService.get<PlayerDTO[]>('players')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data) {
            this.players.set(data);
            if (!this.isEditMode) {
              this.selectedTabIndex = this.players().length === 0 ? "1" : "0";
            }
          }
        },
        error: (err) => {
          if (!this.isEditMode) {
            this.selectedTabIndex = "1";
          }
        }
      });
  }

  loadImages() {
    this.apiService.get<string[]>('characters')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(images => {
        if (images) {
          this.availableImages.set(images);
        }
      });
  }

  loadTeams() {
    this.apiService.get<TeamDTO[]>('teams')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data) {
            this.teams.set(data);
          }
        },
        error: () => {
          // Error handled by ApiService
        }
      });
  }

  selectImage(image: string) {
    this.player.picture = image;
  }

  onImageUpload(event: any) {
    this.imageUploadService.handleUpload(
      event,
      'characters/upload',
      this.availableImages,
      'Image uploadée avec succès',
      "Erreur lors de l'upload de l'image",
      this.destroyRef
    );
  }

  onSubmit() {
    this.validationErrors = {};

    if (!this.isValid()) {
      // Identity specific missing fields
      if (!this.player.pseudo) this.validationErrors['pseudo'] = 'Le pseudo est obligatoire';
      if (!this.player.name) this.validationErrors['name'] = 'Le nom est obligatoire';
      if (!this.player.firstname) this.validationErrors['firstname'] = 'Le prénom est obligatoire';
      if (!this.player.email) this.validationErrors['email'] = "L'email est obligatoire";

      this.notificationService.warn('Attention', 'Veuillez corriger les erreurs avant de valider.');
      return;
    }

    this.loadingService.show();

    const apiCall = this.isEditMode
      ? this.apiService.put('players', this.player)
      : this.apiService.post('players', this.player);

    apiCall.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
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
      error: (err) => {
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
        this.apiService.delete(`players/${player.pseudo}`)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
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

  // ==================== TEAM MANAGEMENT METHODS ====================

  loadAvailableLogos() {
    this.apiService.get<string[]>('teams/logos')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (logos) => {
          if (logos) {
            this.availableLogos.set(logos);
          }
        },
        error: (err) => {
          console.error('Error loading team logos:', err);
          this.availableLogos.set([]);
        }
      });
  }

  onLogoUpload(event: any) {
    this.imageUploadService.handleUpload(
      event,
      'teams/logos/upload',
      this.availableLogos,
      'Logo uploadé avec succès',
      "Erreur lors de l'upload du logo",
      this.destroyRef,
      (logoName) => this.team.logo = logoName
    );
  }

  selectLogo(logo: string) {
    // Backend automatically excludes assigned logos from the available list
    this.team.logo = logo;
  }

  onTeamSubmit() {
    this.teamValidationErrors = {};

    if (!this.isTeamValid()) {
      // Identity specific missing fields
      if (!this.team.name) this.teamValidationErrors['name'] = "Le nom de l'équipe est obligatoire";
      else if (this.team.name.length < 2) this.teamValidationErrors['name'] = "Le nom doit faire au moins 2 caractères";

      this.notificationService.warn('Attention', 'Veuillez corriger les erreurs avant de valider.');
      return;
    }

    this.loadingService.show();

    const apiCall = this.isTeamEditMode
      ? this.apiService.put(`teams/${this.team.id}`, this.team)
      : this.apiService.post('teams', this.team);

    apiCall.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.notificationService.success(
          'Succès',
          this.isTeamEditMode ? 'Équipe modifiée avec succès!' : 'Équipe créée avec succès!'
        );
        this.resetTeamForm();
        this.loadAvailableLogos();  // Reload logos after create/update
        this.loadTeams();
        this.selectedTabIndex = "2";
        this.loadingService.hide();
      },
      error: (err) => {
        if (err?.error?.errors) {
          this.teamValidationErrors = err.error.errors;
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

  resetTeamForm() {
    this.team = {
      name: '',
      logo: ''
    };
    this.teamValidationErrors = {};
    this.isTeamEditMode = false;
  }

  editTeam(team: TeamDTO) {
    this.team = { ...team };
    this.teamValidationErrors = {};
    this.isTeamEditMode = true;
    this.selectedTabIndex = "3";
  }

  deleteTeam(team: TeamDTO) {
    this.confirmationService.confirm({
      message: `Êtes-vous sûr de vouloir supprimer l'équipe ${team.name} ?`,
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.apiService.delete(`teams/${team.id}`)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: () => {
              this.notificationService.success('Succès', 'Équipe supprimée avec succès');
              this.loadAvailableLogos();  // Reload logos after delete
              this.loadTeams();
            },
            error: (err) => {
              console.error('Error deleting team:', err);
              this.notificationService.error('Erreur', 'Impossible de supprimer l\'équipe');
            }
          });
      }
    });
  }

  cancelTeamEdit() {
    this.resetTeamForm();
    this.selectedTabIndex = "2";
  }

  getLogoUrl(filename: string): string {
    return `http://localhost:8080/images/team/${filename}`;
  }
}
