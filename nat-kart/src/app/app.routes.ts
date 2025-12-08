import { Routes } from '@angular/router';
import { ChampionWheelComponent } from './component/champion-wheel/champion-wheel.component';
import { RankingComponent } from './component/ranking/ranking.component';
import { ScoreManagementComponent } from './component/score-management/score-management.component';
import { ConsoleWheelComponent } from './component/console-wheel/console-wheel.component';
import { ConsoleManagementComponent } from './component/console-management/console-management.component';

export const routes: Routes = [
  { path: 'ranking', component: RankingComponent },
  { path: 'champion-wheel', component: ChampionWheelComponent },
  { path: 'score-management', component: ScoreManagementComponent },
  { path: 'console-wheel', component: ConsoleWheelComponent },
  { path: 'console-management', component: ConsoleManagementComponent },
  { path: 'players-teams', loadComponent: () => import('./component/players-teams-management/players-teams-management.component').then(m => m.PlayersTeamsManagementComponent) },
  { path: 'player-management', redirectTo: 'players-teams', pathMatch: 'full' }, // Old route redirect
  { path: 'team-management', redirectTo: 'players-teams', pathMatch: 'full' },  // Old route redirect
  { path: 'admin', loadComponent: () => import('./component/admin/admin.component').then(m => m.AdminComponent) },
  { path: '', redirectTo: 'ranking', pathMatch: 'full' },
  { path: '**', redirectTo: 'ranking' }
];
