import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        TabMenuModule,
        ButtonModule,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'nat-kart';
    items: MenuItem[] = [];
    activeItem: MenuItem = [];
    public logoPath: String = '';
    constructor(private router: Router) {}

    ngOnInit() {
      this.logoPath = 'assets/images/logos/logo-natsystem.png';
        this.items = [
            { label: 'Classement', route: 'natcup' },
            { label: 'Roue des champions', route: 'natspin' },
            { label: 'Roue des consoles', route: 'natspinconsole' },
            { label: 'Gestion des participants', route: 'poolup' },
            { label: 'Gestion des consoles', route: 'parameters-console' }
        ];

        this.activeItem = this.items[0];
    }

    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
        this.router.navigate([this.activeItem['route']]);
    }
}
