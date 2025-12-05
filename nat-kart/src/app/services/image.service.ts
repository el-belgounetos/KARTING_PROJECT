import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    private baseUrl = environment.imageBaseUrl;

    constructor() { }

    getPlayerImageUrl(filename: string): string {
        if (!filename) return '';
        return `${this.baseUrl}/players/${filename}`;
    }

    getConsoleImageUrl(filename: string): string {
        if (!filename) return '';
        return `${this.baseUrl}/consoles/${filename}`;
    }

    getRankImageUrl(filename: string): string {
        if (!filename) return '';
        return `${this.baseUrl}/ranks/${filename}`;
    }

    getWallpaperUrl(filename: string): string {
        if (!filename) return '';
        return `${this.baseUrl}/wallpapers/${filename}`;
    }

    getCupImageUrl(filename: string): string {
        if (!filename) return '';
        return `${this.baseUrl}/cups/${filename}`;
    }

    getImageUrl(path: string): string {
        if (!path) return '';
        return `${this.baseUrl}/${path}`;
    }
}
