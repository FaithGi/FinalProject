import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartmentDetailsPageRoutingModule } from './apartment-details-routing.module';

import { ApartmentDetailsPage } from './apartment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartmentDetailsPageRoutingModule
  ],
  declarations: [ApartmentDetailsPage]
})
export class ApartmentDetailsPageModule {}
