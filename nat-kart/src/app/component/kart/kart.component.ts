import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BadgeModule } from 'primeng/badge';


@Component({
    selector: 'app-kart',
    imports: [
        ImageModule,
        ToastModule,
        BadgeModule,
        CommonModule,
        TooltipModule,
        ScrollPanelModule,
        ButtonModule
    ],
    templateUrl: './kart.component.html',
    styleUrl: './kart.component.scss',
    providers: [MessageService]
})
export class KartComponent implements OnInit  {
  constructor(private http: HttpClient, private messageService: MessageService) {}

  public avatars: string[] = [];
  public excludeAvatars: string[] = [];
  public avatar: string = 'unknown.png';
  public isLoading: boolean = false;

  ngOnInit() {
    this.getAllInfos();
  }

  public onSpin(): void {
    this.isLoading = true;
    console.log(this.isLoading);
    this.http.get('http://localhost:8080/personnages')
      .subscribe(
        (response) => {
          if(response == null) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
            this.isLoading = false;
          } else if((Array.isArray(response) && response.length === 0)) {
            this.messageService.add({ severity: 'info', summary: 'Plus de personnages !', detail: 'La roue ne peux plus tourner, la liste des personnages est vide.' });
            this.isLoading = false;
          } else {
            this.messageService.add({ severity: 'success', summary: 'Datas valides', detail: 'Les données ont bien été chargées avec succès.' });
            this.avatars = response as [];
            this.displayEachAvailableAvatars();
          }
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
    );
  }

  private displayEachAvailableAvatars(): void {
    let index = 0;
    let timer = 100;
    let interval: any;
    let stopInterval = false;
    this.displayMP3('/assets/soundeffect/item-box.mp3');
    const startInterval = () => {
      interval = setInterval(() => {
        this.avatar = this.avatars[index]; // Assigne un avatar à chaque intervalle
        index++;
        // Si on atteint la fin de la liste des avatars, on arrête ou recommence
        if (index >= this.avatars.length) {
          index = 0; // Remet à zéro pour recommencer depuis le début
        }

      }, timer);
    };

    // Démarrer l'intervalle la première fois
    startInterval();

    // Simuler un changement de timer après quelques itérations (par exemple, après 2 secondes)
    setTimeout(() => {
      clearInterval(interval); // Arrêter l'intervalle actuel
      stopInterval = true;
      timer = 300; // Changer la durée du timer
      setTimeout(() => {
        clearInterval(interval);
        this.avatar = this.getRandomAvatar();
        this.excludeAvatarByName(this.avatar);
        this.isLoading = false;
        }, 1200);
      startInterval(); // Redémarrer l'intervalle avec le nouveau timer
    }, 2200);
  }

  public getRandomAvatar(): string {
    if (this.avatars.length === 0) {
      return ''; // Si la liste est vide, renvoyer une chaîne vide ou gérer autrement
    }

    const randomIndex = Math.floor(Math.random() * this.avatars.length);
    return this.avatars[randomIndex];
  }

public displayMP3(path: string): void {
  const audio = new Audio();
  audio.src = path; // Chemin relatif vers le fichier MP3 dans 'assets'
  audio.load(); // Charge le fichier audio
  audio.play(); // Joue l'audio

  audio.onended = () => {
  };
  }

  private excludeAvatarByName(avatar: string): void {
    // Assurez-vous que l'avatar n'est pas vide ou invalide
    if (!avatar) {
      this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Le nom de l\'avatar est invalide.' });
      return;
    }

    // Envoie de la requête POST pour exclure l'avatar
    this.http.post('http://localhost:8080/exclude/' + this.formatAvatarWithoutSpecialCaracters(avatar), {})
      .subscribe(
        (response: any) => {
          if (response == null || (Array.isArray(response) && response.length === 0)) {
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Aucun personnage exclu, vérifiez le nom.' });
          } else {
            this.messageService.add({ severity: 'success', summary: 'Suppression validée', detail: 'Le personnage a bien été exclu.' });

            // Assurez-vous que la réponse est un tableau, et mettez à jour la variable excludeAvatars
            this.getAllInfos();
          }
        },
        (error) => {
          // Gérer les erreurs de l'API
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de l\'appel de l\'API : ' + error.message });
        }
      );
  }

  public resetExcludeAvatars(): void {
    this.http.post('http://localhost:8080/exclude/clear', {})
      .subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'info', summary: 'Suppression validée', detail: 'Le pool a bien été reset.' });
          this.getAllInfos();
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de l\'appel de l\'API : ' + error.message });
        }
      );
  }

  private getCaracters(): void {
    this.http.get('http://localhost:8080/personnages')
      .subscribe(
        (response) => {
          if(response == null)
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
          else if((Array.isArray(response) && response.length === 0)) {
            this.messageService.add({ severity: 'info', summary: 'Plus de personnages !', detail: 'La pool de personnages restants est vide.' });
          }
          else
            this.avatars = response as [];
        },
        (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
        }
    );
  }

  private getExcludeCaracters(): void {
      this.http.get('http://localhost:8080/personnages/exclude')
        .subscribe(
          (response) => {
            if(response == null)
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
            else
              this.excludeAvatars = response as [];
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'appel de l\'API' });
          }
      );
    } // /personnages/exclude

  public introduceAvatarByName(name: string): void {
    this.http.post('http://localhost:8080/introduce/' + this.formatAvatarWithoutSpecialCaracters(name), {})
    .subscribe(
      (response: any) => {
        this.messageService.add({ severity: 'info', summary: 'Ajout validé', detail: 'Le pokémon a bien été réintroduit.' });
        this.getAllInfos();
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de l\'appel de l\'API : ' + error.message });
      }
    );
  }

  private getAllInfos(): void {
    this.getCaracters();
    this.getExcludeCaracters();
  }

private formatAvatarWithoutSpecialCaracters(name: string): string {
    return name.replace("/images/", "").replace(".png", "");
  }
}
