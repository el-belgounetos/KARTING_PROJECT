import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    private baseUrl = environment.imageBaseUrl;

    private buildUrl(folder: string, filename: string): string {
        return filename ? `${this.baseUrl}/${folder}/${filename}` : '';
    }

    getPlayerImageUrl(filename: string): string {
        return this.buildUrl('players', filename);
    }

    getConsoleImageUrl(filename: string): string {
        return this.buildUrl('consoles', filename);
    }

    getRankImageUrl(filename: string): string {
        return this.buildUrl('ranks', filename);
    }

    getWallpaperUrl(filename: string): string {
        return this.buildUrl('wallpapers', filename);
    }

    getCupImageUrl(filename: string): string {
        return this.buildUrl('cups', filename);
    }

    getTeamLogoUrl(filename: string): string {
        return this.buildUrl('team', filename);
    }

    getImageUrl(path: string): string {
        return path ? `${this.baseUrl}/${path}` : '';
    }
}
