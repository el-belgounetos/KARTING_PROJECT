import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleDTO } from '../../dto/consoleDTO';
import { CupsDTO } from '../../dto/cupsDTO';
import { CounterDTO } from '../../dto/counterDTO';
import { HttpClient } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-consoling',
  imports: [
    ImageModule,
    ButtonModule,
    CommonModule
  ],
  templateUrl: './consoling.component.html',
  styleUrl: './consoling.component.scss'
})
export class ConsolingComponent implements OnInit {

  public consolesDisplayed: ConsoleDTO[] = [];
  private consoles: ConsoleDTO[] = [];
  private counters: CounterDTO[] = [];
  public isLoading: boolean = false;
  public isAlreadySpin: boolean = false;
  private totalNumberOfConsole: number = 0;
  public allCupsImages: string[] = [];
  public isConsolesVisible = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllConsoles();

  }

  public getAllConsoles() {
    this.http.get('http://localhost:8080/consoles')
      .subscribe(
        (response) => {
          this.consoles = response as [];
          this.getConsolesNumber();
          this.setDefaultPictures();
        }
      );
  }

  public getConsolesDisplayed(): void {
    // Récupérer la liste des consoles depuis 'consoles'
    this.counters.forEach(counter => {
      const actualConsole = this.consoles.find(console => console.name === counter.console);
      console.log(counter);
      if (actualConsole) {
        for (let i = 0; i < counter.nConsole; i++) {
          console.log(actualConsole);
          this.consolesDisplayed.push({ ...actualConsole });
          console.log(this.consolesDisplayed);
          this.allCupsImages.push('');
          this.totalNumberOfConsole++;
        }
      }
    });
    this.setDefaultPictures();
  }

  public onSpin(): void {
    this.isLoading = true;
    this.isAlreadySpin = true;

    let timer = 100;
    let counter = 0;
    let max = 30;
    let interval: any;


    const startInterval = () => {
      interval = setInterval(() => {
        this.determinateConsolePictures();

        if (counter > max) {
          if (max == 5)
            this.isLoading = false;
          clearInterval(interval); // Stoppe l'intervalle
        }

        counter++;
      }, timer);
    };

    // Démarrer l'intervalle la première fois
    startInterval();
    setTimeout(() => {
      clearInterval(interval);
      timer = 500;
      counter = 0;
      max = 5;
      startInterval();
    }, 3000);
  }

  private determinateConsolePictures(): void {

    let index = 0;
    this.consolesDisplayed.forEach(actualConsole => {
      let pic = this.getRandomPictureFromCups(actualConsole.cups);
      this.allCupsImages[index] = 'http://localhost:8080/images/cup/' + actualConsole.name + '/' + pic;
      index++;
    }
    );
  }

  private getConsolesNumber() {
    this.http.get('http://localhost:8080/counters')
      .subscribe(
        (response) => {
          this.counters = response as [];
          this.getConsolesDisplayed();
        }
      );
  }

  private getRandomPictureFromCups(cups: CupsDTO[]): string {
    if (cups.length === 0)
      return '';

    const randomIndex = Math.floor(Math.random() * cups.length);
    return cups[randomIndex].picture;
  }

  public calculateConsolesPerLine(): number {
    if (this.totalNumberOfConsole <= 10) {
      return 10;
    } else {
      return Math.ceil(this.totalNumberOfConsole / Math.ceil(this.totalNumberOfConsole / 10));
    }
  }

  private setDefaultPictures() {
    this.allCupsImages = [];
    for (let i = 0; i < this.totalNumberOfConsole; i++) {
      this.allCupsImages.push('assets/button/intero.png');
    }
  }

}
