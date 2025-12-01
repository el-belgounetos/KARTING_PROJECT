import { Routes } from '@angular/router';
import { KartComponent } from './component/kart/kart.component';
import { CupComponent } from './component/cup/cup.component';
import { PoolupComponent } from './component/poolup/poolup.component';
import { ConsolingComponent } from './component/consoling/consoling.component';
import { ParametersComponent } from './component/parameters/parameters.component';

export const routes: Routes = [
  { path: 'natcup', component: CupComponent },
  { path: 'natspin', component: KartComponent },
  { path: 'poolup', component: PoolupComponent },
  { path: 'natspinconsole', component: ConsolingComponent },
  { path: 'parameters-console', component: ParametersComponent },
  { path: '', redirectTo: 'natcup', pathMatch: 'full' },
  { path: '**', redirectTo: 'natcup' }
];
