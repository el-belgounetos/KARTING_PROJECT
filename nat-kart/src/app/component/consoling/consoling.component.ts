import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ConsoleDTO } from '../../dto/consoleDTO';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-consoling',
  imports: [CommonModule, ButtonModule, ImageModule],
  templateUrl: './consoling.component.html',
  styleUrl: './consoling.component.scss'
})
export class ConsolingComponent implements OnInit {
  consoles: ConsoleDTO[] = [];
  consolesDisplayed: ConsoleDTO[] = [];
  isLoading = false;
  allCupsImages: string[] = [];
  isConsolesVisible = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadConsoles();
  }

  loadConsoles() {
    this.apiService.get<ConsoleDTO[]>('consoles').subscribe(data => {
      if (data) {
        this.consoles = data;
        this.consolesDisplayed = [...this.consoles];
        this.initializeCupsImages();
      }
    });
  }

  initializeCupsImages() {
    this.allCupsImages = this.consolesDisplayed.map(() => 'assets/button/intero.png');
  }

  onSpin() {
    this.isLoading = true;
    this.initializeCupsImages();

    // Simulate spinning effect
    let spinCount = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      this.consolesDisplayed = this.shuffleArray([...this.consoles]);
      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(interval);
        this.isLoading = false;
        this.revealCups();
      }
    }, 100);
  }

  revealCups() {
    this.consolesDisplayed.forEach((console, index) => {
      setTimeout(() => {
        if (console.cups && console.cups.length > 0) {
          const randomCupIndex = Math.floor(Math.random() * console.cups.length);
          this.allCupsImages[index] = 'http://localhost:8080/images/cup/' + console.name + '/' + console.cups[randomCupIndex].picture;
        }
      }, index * 500); // Reveal one by one every 500ms
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
    if (width < 1024) return 1; // Mobile
    return Math.min(this.consolesDisplayed.length, 3); // Max 3 per line on desktop
  }
}
