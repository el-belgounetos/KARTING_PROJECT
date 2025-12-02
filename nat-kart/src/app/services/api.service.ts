import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:8080';

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    get<T>(endpoint: string): Observable<T | null> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`).pipe(
            catchError(error => {
                this.handleError(error);
                return of(null);
            })
        );
    }

    post<T>(endpoint: string, body: any): Observable<T | null> {
        return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body).pipe(
            catchError(error => {
                this.handleError(error);
                return of(null);
            })
        );
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

    private handleError(error: any) {
        console.error('API Error:', error);
        this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Une erreur est survenue lors de la communication avec le serveur.'
        });
    }
}
