import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apartments',
    loadChildren: () => import('./apartments/apartments.module').then( m => m.ApartmentsPageModule)
  },
  {
    path: 'apartment-details',
    loadChildren: () => import('./apartment-details/apartment-details.module').then( m => m.ApartmentDetailsPageModule)
  },
  {
    path: 'carwash',
    loadChildren: () => import('./carwash/carwash.module').then( m => m.CarwashPageModule)
  },
  {
    path: 'carwash-details',
    loadChildren: () => import('./carwash-details/carwash-details.module').then( m => m.CarwashDetailsPageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then( m => m.AppointmentsPageModule)
  },
  {
    path: 'cleaning',
    loadChildren: () => import('./cleaning/cleaning.module').then( m => m.CleaningPageModule)
  },
  {
    path: 'cleaning-details',
    loadChildren: () => import('./cleaning-details/cleaning-details.module').then( m => m.CleaningDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
