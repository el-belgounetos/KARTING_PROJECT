import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { LoaderComponent } from './component/loader/loader.component';

@Component({
    selector: 'app-root',
    imports: [
        TabsModule,
        ButtonModule,
        RouterOutlet,
        LoaderComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'nat-kart';
    items: MenuItem[] = [];
    activeItem: number = 0;
    public logoPath: String = '';
    public loadingService = inject(LoadingService);

    constructor(private router: Router) { }

    ngOnInit() {
        this.logoPath = 'assets/images/logos/logo-natsystem.png';
        this.items = [
            { label: 'Ranking', route: 'ranking' },
            { label: 'Champion Wheel', route: 'champion-wheel' },
            { label: 'Console Wheel', route: 'console-wheel' },
            { label: 'Score Management', route: 'score-management' },
            { label: 'Console Management', route: 'console-management' },
            { label: 'Player Management', route: 'player-management' },
            { label: 'Admin', route: 'admin' }
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
