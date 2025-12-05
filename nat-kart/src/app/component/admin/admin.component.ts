import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
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

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputNumberModule,
        CheckboxModule,
        ButtonModule
    ],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
    playerCount: number = 5;
    assignImage: boolean = true;
    loading: boolean = false;
    stats: PlayerStats | null = null;

    private apiService = inject(ApiService);
    private loadingService = inject(LoadingService);
    private notificationService = inject(NotificationService);
    private confirmationService = inject(ConfirmationService);
    public imageService = inject(ImageService);

    ngOnInit() {
        this.loadStats();
    }

    loadStats() {
        this.apiService.get<PlayerStats>('admin/stats').subscribe({
            next: (data) => {
                this.stats = data;
            },
            error: (err) => {
                console.error('Error loading stats:', err);
            }
        });
    }

    generatePlayers() {
        console.log('generatePlayers called, count:', this.playerCount, 'assignImage:', this.assignImage);
        this.loading = true;
        this.apiService.post(`admin/generate-players/${this.playerCount}?assignImage=${this.assignImage}`, {}).subscribe({
            next: () => {
                console.log('generatePlayers: Success');
                this.notificationService.success(
                    'Succès',
                    `${this.playerCount} joueurs ont été générés avec succès !`
                );
                this.loading = false;
                this.loadStats();
            },
            error: (err) => {
                console.error('generatePlayers: Error', err);
                this.notificationService.error(
                    'Erreur',
                    'Une erreur est survenue lors de la génération des joueurs.'
                );
                this.loading = false;
            }
        });
    }

    resetParticipants() {
        console.log('resetParticipants called');
        this.confirmationService.confirm({
            message: 'Êtes-vous sûr de vouloir supprimer TOUS les participants ? Cette action est irréversible.',
            header: 'Confirmation de réinitialisation',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Confirmer',
            rejectLabel: 'Annuler',
            acceptButtonStyleClass: 'p-button-danger',
            accept: () => {
                console.log('User confirmed reset');
                this.loading = true;
                this.apiService.delete('admin/players').subscribe({
                    next: () => {
                        console.log('resetParticipants: Success');
                        this.notificationService.success(
                            'Succès',
                            'Tous les participants ont été supprimés'
                        );
                        this.loading = false;
                        this.loadStats();
                    },
                    error: (err) => {
                        console.error('resetParticipants: Error', err);
                        this.loading = false;
                        this.notificationService.error(
                            'Erreur',
                            'Erreur lors de la réinitialisation'
                        );
                    }
                });
            },
            reject: () => {
                console.log('User cancelled reset');
            }
        });
    }
}
