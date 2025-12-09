import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { NotificationService } from '../../services/notification.service';
import { ConfirmationService } from 'primeng/api';
import { ImageService } from '../../services/image.service';

interface PlayerStats {
    totalPlayers: number;
    playersWithAvatar: number;
    playersWithoutAvatar: number;
}

interface TeamStats {
    totalTeams: number;
    teamsWithLogo: number;
    teamsWithoutLogo: number;
}

interface TournamentConfig {
    id?: number;
    allowPlayerImageReuse: boolean;
    allowTeamLogoReuse: boolean;
}

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
    FormsModule,
    InputNumberModule,
    CheckboxModule,
    ButtonModule,
    TabsModule,
    ToggleSwitchModule
],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
    // Player generation
    playerCount: number = 5;
    assignImage: boolean = true;
    loading: boolean = false;
    stats: PlayerStats | null = null;

    // Team generation
    teamCount: number = 5;
    assignLogo: boolean = true;
    teamStats: TeamStats | null = null;

    // Tournament configuration
    tournamentConfig: TournamentConfig = {
        allowPlayerImageReuse: false,
        allowTeamLogoReuse: false
    };

    // Tab selection
    selectedTabIndex: string = "0";

    private apiService = inject(ApiService);
    private loadingService = inject(LoadingService);
    private notificationService = inject(NotificationService);
    private confirmationService = inject(ConfirmationService);
    public imageService = inject(ImageService);
    private destroyRef = inject(DestroyRef);

    ngOnInit() {
        this.loadStats();
        this.loadTeamStats();
        this.loadTournamentConfig();
    }

    loadStats() {
        this.apiService.get<PlayerStats>('admin/stats')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (data) => {
                    this.stats = data;
                },
                error: () => {
                    // Error handled by ApiService
                }
            });
    }

    generatePlayers() {
        this.loading = true;
        this.apiService.post(`admin/generate-players/${this.playerCount}?assignImage=${this.assignImage}`, {})
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.notificationService.success(
                        'Succès',
                        `${this.playerCount} joueurs ont été générés avec succès !`
                    );
                    this.loading = false;
                    this.loadStats();
                },
                error: () => {
                    this.notificationService.error(
                        'Erreur',
                        'Une erreur est survenue lors de la génération des joueurs.'
                    );
                    this.loading = false;
                }
            });
    }

    resetParticipants() {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer TOUS les participants ? Cette action est irréversible.',
            header: 'Confirmation de réinitialisation',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Confirmer',
            rejectLabel: 'Annuler',
            acceptButtonStyleClass: 'p-button-danger',
            accept: () => {
                this.loading = true;
                this.apiService.delete('admin/players')
                    .pipe(takeUntilDestroyed(this.destroyRef))
                    .subscribe({
                        next: () => {
                            this.notificationService.success(
                                'Succès',
                                'Tous les participants ont été supprimés'
                            );
                            this.loading = false;
                            this.loadStats();
                        },
                        error: () => {
                            this.loading = false;
                            this.notificationService.error(
                                'Erreur',
                                'Erreur lors de la réinitialisation'
                            );
                        }
                    });
            }
        });
    }

    // Team methods
    loadTeamStats() {
        this.apiService.get<TeamStats>('admin/team-stats')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (data) => {
                    this.teamStats = data;
                },
                error: () => {
                    // Error handled by ApiService
                }
            });
    }

    generateTeams() {
        this.loading = true;
        this.apiService.post(`admin/generate-teams/${this.teamCount}?assignLogo=${this.assignLogo}`, {})
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.notificationService.success(
                        'Succès',
                        `${this.teamCount} équipes ont été générées avec succès !`
                    );
                    this.loading = false;
                    this.loadTeamStats();
                },
                error: () => {
                    this.notificationService.error(
                        'Erreur',
                        'Une erreur est survenue lors de la génération des équipes.'
                    );
                    this.loading = false;
                }
            });
    }

    resetTeams() {
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer TOUTES les équipes ? Cette action est irréversible.',
            header: 'Confirmation de réinitialisation',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Confirmer',
            rejectLabel: 'Annuler',
            acceptButtonStyleClass: 'p-button-danger',
            accept: () => {
                this.loading = true;
                this.apiService.delete('admin/teams')
                    .pipe(takeUntilDestroyed(this.destroyRef))
                    .subscribe({
                        next: () => {
                            this.notificationService.success(
                                'Succès',
                                'Toutes les équipes ont été supprimées'
                            );
                            this.loading = false;
                            this.loadTeamStats();
                        },
                        error: () => {
                            this.loading = false;
                            this.notificationService.error(
                                'Erreur',
                                'Erreur lors de la réinitialisation'
                            );
                        }
                    });
            }
        });
    }

    // Tournament configuration methods
    loadTournamentConfig() {
        this.apiService.get<TournamentConfig>('admin/tournament-config')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (data) => {
                    if (data) {
                        this.tournamentConfig = data;
                    }
                },
                error: () => {
                    // Error handled by ApiService
                }
            });
    }

    saveTournamentConfig() {
        this.loading = true;
        this.apiService.put('admin/tournament-config', this.tournamentConfig)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.notificationService.success(
                        'Succès',
                        'Configuration sauvegardée avec succès !'
                    );
                    this.loading = false;
                },
                error: () => {
                    this.notificationService.error(
                        'Erreur',
                        'Erreur lors de la sauvegarde de la configuration.'
                    );
                    this.loading = false;
                }
            });
    }
}
