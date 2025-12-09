import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LabelService {
    private http = inject(HttpClient);

    // Modern Angular 20: signal instead of BehaviorSubject
    labels = signal<Record<string, any>>({});

    constructor() {
        this.loadLabels();
    }

    private loadLabels(): void {
        this.http.get<Record<string, any>>('/assets/labels-fr.json').subscribe(data => {
            if (data) {
                this.labels.set(data);
            }
        });
    }

    getLabel(key: string): string {
        const keys = key.split('.');
        let value: unknown = this.labels();

        for (const k of keys) {
            value = (value as Record<string, unknown>)?.[k];
            if (!value) return key;
        }

        return (value as string) || key;
    }
}
