import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ConsoleDTO } from '../../dto/consoleDTO';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';

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

  isConsolesVisible = true;

  private apiService = inject(ApiService);
  public loadingService = inject(LoadingService);

  ngOnInit() {
    this.loadConsoles();
  }

  loadConsoles() {
    this.apiService.get<ConsoleDTO[]>('consoles').subscribe(data => {
      if (data) {
        this.consoles.set(data);
        this.consolesDisplayed.set([...data]);
        this.initializeCupsImages();
      }
    });
  }

  initializeCupsImages() {
    const placeholders = this.consolesDisplayed().map(() => 'http://localhost:8080/images/ui/intero.png');
    this.allCupsImages.set(placeholders);
  }

  onSpin() {
    this.loadingService.show();
    this.initializeCupsImages();

    // Simulate spinning effect
    let spinCount = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      this.consolesDisplayed.set(this.shuffleArray([...this.consoles()]));
      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(interval);
        this.loadingService.hide();
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
          newImages[index] = 'http://localhost:8080/images/cups/' + console.name + '/' + console.cups[randomCupIndex].picture;
          this.allCupsImages.set(newImages);
        }
      }, index * 500);
    });
  }

  shuffleArray(array: any[]) {
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
