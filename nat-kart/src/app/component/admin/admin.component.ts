import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputNumberModule,
        CheckboxModule,
        ButtonModule,
        ToastModule
    ],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss'
})
export class AdminComponent {
    playerCount: number = 5;
    assignImage: boolean = true;
    loading: boolean = false;

    constructor(
        private apiService: ApiService,
        private messageService: MessageService
    ) { }

    generatePlayers() {
        console.log('generatePlayers called, count:', this.playerCount, 'assignImage:', this.assignImage);
        this.loading = true;
        this.apiService.post(`admin/generate-players/${this.playerCount}?assignImage=${this.assignImage}`, {}).subscribe({
            next: () => {
                console.log('generatePlayers: Success');
                this.messageService.add({
                    severity: 'success',
                    summary: 'Succès',
                    detail: `${this.playerCount} joueurs ont été générés avec succès !`
                });
                this.loading = false;
            },
            error: (err) => {
                console.error('generatePlayers: Error', err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Une erreur est survenue lors de la génération des joueurs.'
                });
                this.loading = false;
            }
        });
    }

    resetParticipants() {
        console.log('resetParticipants called');
        if (confirm('Êtes-vous sûr de vouloir supprimer TOUS les participants ? Cette action est irréversible.')) {
            console.log('User confirmed reset');
            this.loading = true;
            this.apiService.delete('players').subscribe({
                next: () => {
                    console.log('resetParticipants: Success');
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Tous les participants ont été supprimés'
                    });
                    this.loading = false;
                },
                error: (err) => {
                    console.error('resetParticipants: Error', err);
                    this.loading = false;
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreur',
                        detail: 'Erreur lors de la réinitialisation'
                    });
                }
            });
        } else {
            console.log('User cancelled reset');
        }
    }
}
