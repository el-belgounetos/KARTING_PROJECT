import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

/**
 * Centralized notification service.
 * Wraps PrimeNG MessageService for consistent toast notifications across the app.
 * Future: add i18n support, logging, custom durations.
 */
@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private messageService = inject(MessageService);

    /**
     * Display a success toast notification.
     */
    success(summary: string, detail: string, life: number = 3000): void {
        this.messageService.add({
            severity: 'success',
            summary,
            detail,
            life
        });
    }

    /**
     * Display an error toast notification.
     */
    error(summary: string, detail: string, life: number = 5000): void {
        this.messageService.add({
            severity: 'error',
            summary,
            detail,
            life
        });
    }

    /**
     * Display an info toast notification.
     */
    info(summary: string, detail: string, life: number = 3000): void {
        this.messageService.add({
            severity: 'info',
            summary,
            detail,
            life
        });
    }

    /**
     * Display a warning toast notification.
     */
    warn(summary: string, detail: string, life: number = 4000): void {
        this.messageService.add({
            severity: 'warn',
            summary,
            detail,
            life
        });
    }
}
