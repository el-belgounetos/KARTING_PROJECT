import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { LoadingService } from './services/loading.service';
import { LoaderComponent } from './component/loader/loader.component';
import { filter } from 'rxjs/operators';

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
    activeItem = signal<number>(0);
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

        // Update active tab based on current route
        this.updateActiveItem(this.router.url);

        // Listen to navigation events to keep menu in sync
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            this.updateActiveItem(event.urlAfterRedirects);
        });
    }

    private updateActiveItem(url: string) {
        const currentRoute = url.substring(1); // Remove leading slash
        const foundIndex = this.items.findIndex(item => item['route'] === currentRoute);
        this.activeItem.set(foundIndex !== -1 ? foundIndex : 0);
    }

    onActiveItemChange(event: any) {
        // Handle different event structures: { index: ... }, { value: ... }, or direct value
        const index = event.index ?? event.value ?? event;

        if (typeof index === 'number' && this.items[index]) {
            this.activeItem.set(index);
            this.router.navigate([this.items[index]['route']]);
        }
    }
}
