import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home.component';
import { DetailComponent } from './presentation/pages/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Pokedex',
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    title: 'Home details',
  },
];
