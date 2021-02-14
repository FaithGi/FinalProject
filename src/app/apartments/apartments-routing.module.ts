import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartmentsPage } from './apartments.page';

const routes: Routes = [
  {
    path: '',
    component: ApartmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentsPageRoutingModule {}
