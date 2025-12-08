import { Component, OnInit, signal, computed, inject, ChangeDetectionStrategy, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { NotificationService } from '../../services/notification.service';
import { TeamDTO } from '../../dto/teamDTO';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ConfirmationService } from 'primeng/api';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-team-management',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    TableModule,
    TabsModule
  ],
  templateUrl: './team-management.component.html',
  styleUrl: './team-management.component.scss'
})
export class TeamManagementComponent implements OnInit {
  team: TeamDTO = {
    name: '',
    logo: ''
  };

  // Signals for reactive state
  teams = signal<TeamDTO[]>([]);
  availableLogos = signal<string[]>([]);

  isEditMode: boolean = false;
  selectedTabIndex: string = "0";
  validationErrors: { [key: string]: string } = {};

  // Computed signal for form validation
  isValid = computed(() => !!(this.team.name && this.team.name.length >= 2));

  private apiService = inject(ApiService);
  public loadingService = inject(LoadingService);
  private notificationService = inject(NotificationService);
  private confirmationService = inject(ConfirmationService);
  public imageService = inject(ImageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.loadTeams();
    this.loadAvailableLogos();
  }

  loadTeams() {
    this.apiService.get<TeamDTO[]>('teams')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data) {
            this.teams.set(data);
            if (!this.isEditMode) {
              this.selectedTabIndex = this.teams().length === 0 ? "1" : "0";
            }
          }
        },
        error: () => {
          if (!this.isEditMode) {
            this.selectedTabIndex = "1";
          }
        }
      });
  }

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
          // Fallback to empty array on error
          this.availableLogos.set([]);
        }
      });
  }

  selectLogo(logo: string) {
    this.team.logo = logo;
  }

  onSubmit() {
    this.validationErrors = {};

    if (!this.isValid()) {
      this.notificationService.warn('Attention', 'Veuillez remplir tous les champs obligatoires.');
      return;
    }

    this.loadingService.show();

    const apiCall = this.isEditMode
      ? this.apiService.put(`teams/${this.team.id}`, this.team)
      : this.apiService.post('teams', this.team);

    apiCall.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.notificationService.success(
          'Succès',
          this.isEditMode ? 'Équipe modifiée avec succès!' : 'Équipe créée avec succès!'
        );
        this.resetForm();
        this.loadTeams();
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
    this.team = {
      name: '',
      logo: ''
    };
    this.validationErrors = {};
    this.isEditMode = false;
  }

  editTeam(team: TeamDTO) {
    this.team = { ...team };
    this.validationErrors = {};
    this.isEditMode = true;
    this.selectedTabIndex = "1";
  }

  deleteTeam(team: TeamDTO) {
    this.confirmationService.confirm({
      message: `Êtes-vous sûr de vouloir supprimer l'équipe "${team.name}" ?`,
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
              this.loadTeams();
            },
            error: (err) => {
              const errorMessage = err.error?.message || 'Impossible de supprimer l\'équipe';
              this.notificationService.error('Erreur', errorMessage);
            }
          });
      }
    });
  }

  cancelEdit() {
    this.resetForm();
    this.selectedTabIndex = "0";
  }

  getLogoUrl(logo: string | undefined): string {
    if (!logo) return '';
    return this.imageService.getTeamLogoUrl(logo);
  }
}
