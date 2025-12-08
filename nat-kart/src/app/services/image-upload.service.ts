import { inject, Injectable, Signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiService } from './api.service';
import { LoadingService } from './loading.service';
import { NotificationService } from './notification.service';

/**
 * Shared service for handling image/logo uploads.
 * Eliminates code duplication between player-management and team-management components.
 */
@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {
    private apiService = inject(ApiService);
    private loadingService = inject(LoadingService);
    private notificationService = inject(NotificationService);

    /**
     * Handles file upload with loading, error handling, and list refresh.
     * 
     * @param event File upload event
     * @param endpoint API endpoint (e.g., 'characters/upload' or 'teams/logos/upload')
     * @param listSignal Signal to update with new list
     * @param successMessage Success notification message
     * @param errorMessage Error notification message
     * @param destroyRef DestroyRef for takeUntilDestroyed
     */
    handleUpload(
        event: any,
        endpoint: string,
        listSignal: WritableSignal<string[]>,
        successMessage: string,
        errorMessage: string,
        destroyRef: any
    ): void {
        const file = event.files[0];
        const formData = new FormData();
        formData.append('file', file);

        this.loadingService.show();
        this.apiService.postFormData<string[]>(endpoint, formData)
            .pipe(takeUntilDestroyed(destroyRef))
            .subscribe({
                next: (items) => {
                    if (items) {
                        listSignal.set(items);
                        this.notificationService.success('Succès', successMessage);
                    }
                    this.loadingService.hide();
                },
                error: (err) => {
                    const msg = err.error?.error || errorMessage;
                    this.notificationService.error('Erreur', msg);
                    this.loadingService.hide();
                }
            });
    }
}
