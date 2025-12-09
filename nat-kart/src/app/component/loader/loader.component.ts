import { Component } from '@angular/core';


/**
 * Global loading spinner component.
 * Displays a fullscreen loading overlay with a modern spinner.
 */
@Component({
    selector: 'app-loader',
    imports: [],
    template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div class="flex flex-col items-center gap-4">
        <!-- Spinner -->
        <div class="relative h-16 w-16">
          <div class="absolute inset-0 rounded-full border-4 border-white/20"></div>
          <div class="absolute inset-0 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        
        <!-- Loading text -->
        <p class="text-white text-lg font-semibold tracking-wide animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  `,
    styles: []
})
export class LoaderComponent { }
