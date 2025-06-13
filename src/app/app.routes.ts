import { Routes } from '@angular/router';
import { LayoutComponent } from 'features/pokedex/presentation/components/templates/layout/layout.component';
import { DetailComponent } from 'features/pokedex/presentation/pages/detail/detail.component';
import { HomeComponent } from 'features/pokedex/presentation/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Pokedex',
      },
      {
        path: 'details/:id',
        component: DetailComponent,
        title: 'Detalles',
      },
    ],
  },
];
