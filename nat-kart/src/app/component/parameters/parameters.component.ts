import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CounterDTO } from '../../dto/counterDTO';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@Component({
    selector: 'app-parameters',
    imports: [
    ImageModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    InputNumberModule
],
    templateUrl: './parameters.component.html',
    styleUrl: './parameters.component.scss',
    providers: [MessageService]
})
export class ParametersComponent implements OnInit {

  public consolesValues: number[] = [];

  public counters: CounterDTO[] = [];

  constructor(private http: HttpClient, private messageService: MessageService) {}

  ngOnInit() {
    this.getConsolesNumber();
  }

  private getConsolesNumber() {
      this.http.get('http://localhost:8080/counters')
      .subscribe(
        (response) => {
          this.counters = response as [];
          this.buildConsoleNumber();
        },
       (error) => {
         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
       }
      );
  }

  private buildConsoleNumber(): void {
    for(let i = 0; i< this.counters.length; i++)
      this.consolesValues[i] = this.counters[i].nConsole;
  }

  public onSaveCounters(): void {
    this.buildCountersBody();
    this.http.post('http://localhost:8080/counters', this.counters)
    .subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Sauvegarde réussie', detail: 'Les données ont été mises à jour avec succès.' });
        this.getConsolesNumber();
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
      }
    );
  }

  private buildCountersBody():void {
    for(let i = 0; i< this.consolesValues.length; i++)
      this.counters[i].nConsole = this.consolesValues[i];
  }
}
