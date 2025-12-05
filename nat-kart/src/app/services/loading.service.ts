import { Injectable, signal } from '@angular/core';

/**
 * Centralized loading state management service.
 * Provides a global loading signal that can be used across the application.
 */
@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    /**
     * Global loading state signal.
     * Components can read this to display loading indicators.
     */
    loading = signal(false);

    /**
     * Show the global loader.
     */
    show(): void {
        this.loading.set(true);
    }

    /**
     * Hide the global loader.
     */
    hide(): void {
        this.loading.set(false);
    }
}
