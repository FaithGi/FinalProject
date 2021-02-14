import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartmentsPageRoutingModule } from './apartments-routing.module';

import { ApartmentsPage } from './apartments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartmentsPageRoutingModule
  ],
  declarations: [ApartmentsPage]
})
export class ApartmentsPageModule {}
