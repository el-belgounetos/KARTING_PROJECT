import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { KarterDTO } from '../../dto/karterDTO';
import { ConsoleDTO } from '../../dto/consoleDTO';
import { CupsDTO } from '../../dto/cupsDTO';
import { HistoriqueDTO } from '../../dto/historiqueDTO';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';

import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';


@Component({
    selector: 'app-poolup',
    imports: [
    ListboxModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    InputNumberModule,
    InputSwitchModule,
    BadgeModule,
    TableModule,
    FormsModule
],
    templateUrl: './poolup.component.html',
    styleUrl: './poolup.component.scss',
    providers: [MessageService]
})
export class PoolupComponent  implements OnInit {

  public ranks: KarterDTO[] = [];
  public selectedRank: KarterDTO = new KarterDTO();

  public consoles: ConsoleDTO[] = [];
  public selectedConsole: ConsoleDTO = new ConsoleDTO();

  public cups: CupsDTO[] = [];
  public selectedCups: CupsDTO = new CupsDTO();

  public valueToAdd: number = 0;
  public loading: boolean = false;

  public victory: boolean = false;

  public historique: HistoriqueDTO[] = [];

  constructor(private http: HttpClient, private messageService: MessageService) {}

  ngOnInit() {
    this.getAllRanks();
    this.getAllConsoles();
  }

  public getAllRanks() {
    this.http.get('http://localhost:8080/ranks')
      .subscribe(
        (response) => {
          if(response == null)
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
          else {
            this.ranks = response as [];
            this.getKarterByName(this.selectedRank.name);
          }
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
    );
  }

  public selectNewRank(selectedRank: any) {
    this.selectedRank = selectedRank;
    this.getHistoriqueByPlayerName(this.selectedRank.name);
  }

  public updatePlayer(): void {
    this.loading = true;
    if(this.selectedRank != null) {
      this.selectedRank.points += this.valueToAdd;
      if(this.victory)
        this.selectedRank.victory ++;
      this.http.post('http://localhost:8080/ranks' , this.selectedRank)
        .subscribe(
          (response) => {
              this.messageService.add({ severity: 'success', summary: 'Mise à jour réussie', detail: 'Les points du participant ont bien été mis à jour' });
              this.updateHistorique();
              const name = this.selectedRank.name;
              this.resetDatas();
          },
          (error) => {
            this.resetDatas();
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
          }
        );
    }
  }

  private updateHistorique(): void {
    let historiqueDTO = new HistoriqueDTO();
    historiqueDTO.player = this.selectedRank;
    historiqueDTO.console = this.selectedConsole;
    historiqueDTO.cups = this.selectedCups;
    historiqueDTO.points = this.valueToAdd;
    historiqueDTO.victory = this.victory;

    this.http.post('http://localhost:8080/historique' , historiqueDTO)
      .subscribe(
        (response) => {
            this.messageService.add({ severity: 'info', summary: 'Historique', detail: 'L\'historique a bien été mis à jour' });
        },
        (error) => {
          this.resetDatas();
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
    );
    this.getHistoriqueByPlayerName(historiqueDTO.player.name);
  }

  public isUpdateButtonAvailable(): boolean {

    return this.valueToAdd == 0
      || this.selectedRank == null
      || this.selectedRank.name == ""
      || this.selectedConsole == null
      || this.selectedConsole.name == ""
      || this.selectedCups == null
      || this.selectedCups.name == "";
  }

  public getKarterByName(name: string): void {
    this.ranks.forEach(rank => {
        if(rank.name == name) {
          this.selectedRank = rank;
          this.getHistoriqueByPlayerName(this.selectedRank.name);
        }
      }
    );
  }

  public getAllConsoles() {
    this.http.get('http://localhost:8080/consoles')
      .subscribe(
        (response) => {
          if(response == null)
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
          else {
            this.consoles = response as [];
          }
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
    );
  }

public getHistoriqueByPlayerName(playerName: string) {
    this.http.get('http://localhost:8080/historique/' + playerName)
      .subscribe(
        (response) => {
          if(response == null)
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
          else {
            this.historique = response as [];
            }
          },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
    );
  }

  public onConsoleSelected() {
    this.getAllConsoles();
    if(this.selectedConsole != null && this.selectedConsole.name != "") {
      this.cups = this.selectedConsole.cups;
      this.historique.forEach(line => {
        this.cups = this.cups.filter(cup => cup.name !== line.cups.name);
      });
   } else {
    this.cups = [];
   }
  }

  private resetDatas() {
    this.getAllRanks();
    this.valueToAdd = 0;
    this.loading = false;
    this.victory = false;
    this.selectedCups = new CupsDTO();
    this.selectedConsole = new ConsoleDTO();
  }

  public deleteHistorique(historique: HistoriqueDTO) {
    this.http.delete('http://localhost:8080/historique/' + historique.id)
      .subscribe(
        (response) => {
            this.messageService.add({ severity: 'info', summary: 'Historique', detail: 'La ligne a bien été supprimée' });
            this.resetDatas();
        },
        (error) => {
          this.resetDatas();
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
      }
      );
  }
}
