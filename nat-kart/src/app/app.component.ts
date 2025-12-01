import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        TabsModule,
        ButtonModule,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'nat-kart';
    items: MenuItem[] = [];
    activeItem: number = 0;
    public logoPath: String = '';
    constructor(private router: Router) { }

    ngOnInit() {
        this.logoPath = 'assets/images/logos/logo-natsystem.png';
        this.items = [
            { label: 'Classement', route: 'natcup' },
            { label: 'Roue des champions', route: 'natspin' },
            { label: 'Roue des consoles', route: 'natspinconsole' },
            { label: 'Gestion des participants', route: 'poolup' },
            { label: 'Gestion des consoles', route: 'parameters-console' }
        ];

        // Synchronize active tab with current route
        const currentRoute = this.router.url.substring(1); // Remove leading slash
        const foundIndex = this.items.findIndex(item => item['route'] === currentRoute);
        this.activeItem = foundIndex !== -1 ? foundIndex : 0;
    }

    onActiveItemChange(event: any) {
        // Handle different event structures: { index: ... }, { value: ... }, or direct value
        const index = event.index ?? event.value ?? event;

        if (typeof index === 'number' && this.items[index]) {
            this.activeItem = index;
            this.router.navigate([this.items[index]['route']]);
        }
    }
}
