import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'geoloc',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../geoloc/geoloc.module').then(m => m.GeolocPageModule)
          }
        ]
      },
      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mapa/mapa.module').then(m => m.MapaPageModule)
          }
        ]
      },
      {
        path: 'trak',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../trak/trak.module').then(m => m.TrakPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/geoloc',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/geoloc',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
