import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleaningDetailsPageRoutingModule } from './cleaning-details-routing.module';

import { CleaningDetailsPage } from './cleaning-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleaningDetailsPageRoutingModule
  ],
  declarations: [CleaningDetailsPage]
})
export class CleaningDetailsPageModule {}
