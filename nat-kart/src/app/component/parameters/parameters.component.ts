import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterDTO } from '../../dto/counterDTO';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ApiService } from '../../services/api.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-parameters',
  imports: [CommonModule, FormsModule, ImageModule, InputNumberModule, ButtonModule, ToastModule],
  templateUrl: './parameters.component.html',
  styleUrl: './parameters.component.scss'
})
export class ParametersComponent implements OnInit {
  counters: CounterDTO[] = [];
  consolesValues: number[] = [];

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadCounters();
  }

  loadCounters() {
    this.apiService.get<CounterDTO[]>('counters').subscribe(counters => {
      if (counters) {
        this.counters = counters;
        this.consolesValues = this.counters.map(c => c.nConsole);
      }
    });
  }

  onSaveCounters() {
    this.counters.forEach((counter, index) => {
      counter.nConsole = this.consolesValues[index];
    });

    this.apiService.post('counters', this.counters).subscribe(response => {
      if (response) {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Les compteurs ont été mis à jour'
        });
      }
    });
  }
}
