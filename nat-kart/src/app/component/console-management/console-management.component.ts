import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterDTO } from '../../dto/counterDTO';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../services/api.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-console-management',
  imports: [CommonModule, FormsModule, ImageModule, InputNumberModule, ButtonModule],
  templateUrl: './console-management.component.html',
  styleUrl: './console-management.component.scss'
})
export class ConsoleManagementComponent implements OnInit {
  // Signals for reactive state
  counters = signal<CounterDTO[]>([]);
  consolesValues: number[] = [];

  private apiService = inject(ApiService);
  private notificationService = inject(NotificationService);

  ngOnInit() {
    this.loadCounters();
  }

  loadCounters() {
    this.apiService.get<CounterDTO[]>('counters').subscribe(counters => {
      if (counters) {
        this.counters.set(counters);
        this.consolesValues = counters.map(c => c.counter);
      }
    });
  }

  onSaveCounters() {
    const updatedCounters = this.counters().map((counter, index) => ({
      ...counter,
      counter: this.consolesValues[index]
    }));

    this.apiService.post('counters', updatedCounters).subscribe(response => {
      if (response) {
        this.notificationService.success('Succès', 'Les compteurs ont été mis à jour');
        this.counters.set(updatedCounters);
      }
    });
  }
}
