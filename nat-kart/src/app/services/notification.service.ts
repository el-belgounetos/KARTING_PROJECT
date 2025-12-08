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

    private show(severity: string, summary: string, detail: string, life: number): void {
        this.messageService.add({ severity, summary, detail, life });
    }

    /**
     * Display a success toast notification.
     */
    success(summary: string, detail: string, life = 3000): void {
        this.show('success', summary, detail, life);
    }

    /**
     * Display an error toast notification.
     */
    error(summary: string, detail: string, life = 5000): void {
        this.show('error', summary, detail, life);
    }

    /**
     * Display an info toast notification.
     */
    info(summary: string, detail: string, life = 3000): void {
        this.show('info', summary, detail, life);
    }

    /**
     * Display a warning toast notification.
     */
    warn(summary: string, detail: string, life = 4000): void {
        this.show('warn', summary, detail, life);
    }
}
