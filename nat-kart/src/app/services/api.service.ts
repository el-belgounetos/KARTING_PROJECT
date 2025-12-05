import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:8080/api';

    constructor(
        private http: HttpClient,
        private notificationService: NotificationService
    ) { }

    get<T>(endpoint: string): Observable<T | null> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`).pipe(
            catchError(error => {
                this.handleError(error);
                return of(null);
            })
        );
    }

    post<T>(endpoint: string, body: unknown): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
    }

    put<T>(endpoint: string, body: unknown): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
    }

    delete<T>(endpoint: string): Observable<T | null> {
        return this.http.delete<T>(`${this.baseUrl}/${endpoint}`).pipe(
            catchError(error => {
                this.handleError(error);
                return of(null);
            })
        );
    }

    getBlob(endpoint: string): Observable<Blob | null> {
        return this.http.get(`${this.baseUrl}/${endpoint}`, { responseType: 'blob' }).pipe(
            catchError(error => {
                this.handleError(error);
                return of(null);
            })
        );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('API Error:', error);

        // Handle validation errors (400 with field-specific errors)
        if (error.status === 400 && error.error?.errors) {
            const validationErrors = error.error.errors;
            const errorMessages = Object.keys(validationErrors)
                .map(field => `${field}: ${validationErrors[field]}`)
                .join('\n');

            this.notificationService.error(
                'Erreurs de validation',
                errorMessages,
                5000
            );
        } else {
            // Handle other errors
            const errorMessage = error.error?.message || 'Une erreur est survenue lors de la communication avec le serveur.';
            this.notificationService.error(
                'Erreur',
                errorMessage
            );
        }
    }
}
