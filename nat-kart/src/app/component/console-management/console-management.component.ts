import { Component, OnInit, signal, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormsModule } from '@angular/forms';
import { CounterDTO } from '../../dto/counterDTO';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../services/api.service';
import { NotificationService } from '../../services/notification.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-console-management',
  imports: [FormsModule, ImageModule, InputNumberModule, ButtonModule],
  templateUrl: './console-management.component.html',
  styleUrl: './console-management.component.scss'
})
export class ConsoleManagementComponent implements OnInit {
  // Signals for reactive state
  counters = signal<CounterDTO[]>([]);
  consolesValues: number[] = [];

  private apiService = inject(ApiService);
  private notificationService = inject(NotificationService);
  public imageService = inject(ImageService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.loadCounters();
  }

  loadCounters() {
    this.apiService.get<CounterDTO[]>('counters')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(counters => {
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

    this.apiService.post('counters', updatedCounters)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.notificationService.success('Succès', 'Les compteurs ont été mis à jour');
          this.counters.set(updatedCounters);
        },
        error: () => {
          this.notificationService.error('Erreur', 'Impossible de sauvegarder les compteurs');
        }
      });
  }
}
