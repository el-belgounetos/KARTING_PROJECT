import { Component, OnInit, signal, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ConsoleDTO } from '../../dto/consoleDTO';
import { CounterDTO } from '../../dto/counterDTO';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { forkJoin } from 'rxjs';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-console-wheel',
  imports: [CommonModule, ButtonModule, ImageModule],
  templateUrl: './console-wheel.component.html',
  styleUrl: './console-wheel.component.scss'
})
export class ConsoleWheelComponent implements OnInit {
  // Signals for reactive state
  consoles = signal<ConsoleDTO[]>([]);
  consolesDisplayed = signal<ConsoleDTO[]>([]);
  allCupsImages = signal<string[]>([]);
  isSpinning = signal<boolean>(false);

  private apiService = inject(ApiService);
  public loadingService = inject(LoadingService);
  public imageService = inject(ImageService);

  ngOnInit() {
    this.loadConsoles();
  }

  loadConsoles() {
    forkJoin({
      consoles: this.apiService.get<ConsoleDTO[]>('consoles'),
      counters: this.apiService.get<CounterDTO[]>('counters')
    })
      .pipe(takeUntilDestroyed())
      .subscribe(({ consoles, counters }) => {
        if (consoles && counters) {
          const availableConsoles = consoles.flatMap(console => {
            const counter = counters.find(c => c.name === console.name);
            const count = counter?.counter ?? 0;
            return Array.from({ length: count }, () => ({ ...console }));
          });

          this.consoles.set(availableConsoles);
          this.consolesDisplayed.set([...availableConsoles]);
          this.initializeCupsImages();
        }
      });
  }

  initializeCupsImages() {
    const placeholders = this.consolesDisplayed().map(() => this.imageService.getImageUrl('ui/intero.png'));
    this.allCupsImages.set(placeholders);
  }

  onSpin() {
    if (this.consolesDisplayed().length === 0) return;

    this.isSpinning.set(true);
    this.initializeCupsImages();

    // Simulate spinning effect on cup images
    let spinCount = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      // Shuffle cup images instead of consoles
      const randomCupImages = this.consolesDisplayed().map(console => {
        if (console.cups && console.cups.length > 0) {
          const randomCupIndex = Math.floor(Math.random() * console.cups.length);
          return this.imageService.getCupImageUrl(console.name + '/' + console.cups[randomCupIndex].picture);
        }
        return this.imageService.getImageUrl('ui/intero.png');
      });
      this.allCupsImages.set(randomCupImages);

      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(interval);
        this.isSpinning.set(false);
        this.revealCups();
      }
    }, 100);
  }

  revealCups() {
    const displayed = this.consolesDisplayed();
    displayed.forEach((console, index) => {
      setTimeout(() => {
        if (console.cups && console.cups.length > 0) {
          const randomCupIndex = Math.floor(Math.random() * console.cups.length);
          const newImages = [...this.allCupsImages()];
          newImages[index] = this.imageService.getCupImageUrl(console.name + '/' + console.cups[randomCupIndex].picture);
          this.allCupsImages.set(newImages);
        }
      }, index * 500);
    });
  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  calculateConsolesPerLine(): number {
    const width = window.innerWidth;
    if (width < 1024) return 1;
    return Math.min(this.consolesDisplayed().length, 3);
  }
}
