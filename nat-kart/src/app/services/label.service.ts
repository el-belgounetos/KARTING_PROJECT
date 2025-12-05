import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LabelService {
    private labels: Record<string, any> = {};
    private labelsSubject = new BehaviorSubject<Record<string, any>>({});

    constructor(private http: HttpClient) {
        this.loadLabels();
    }

    private loadLabels(): void {
        this.http.get<Record<string, any>>('/assets/labels-fr.json').subscribe(data => {
            this.labels = data;
            this.labelsSubject.next(data);
        });
    }

    getLabel(key: string): string {
        const keys = key.split('.');
        let value = this.labels;

        for (const k of keys) {
            value = value?.[k];
            if (!value) return key;
        }

        return (value as unknown as string) || key;
    }

    getLabels$(): Observable<Record<string, any>> {
        return this.labelsSubject.asObservable();
    }
}
