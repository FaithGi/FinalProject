import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartmentDetailsPage } from './apartment-details.page';

const routes: Routes = [
  {
    path: '',
    component: ApartmentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentDetailsPageRoutingModule {}
