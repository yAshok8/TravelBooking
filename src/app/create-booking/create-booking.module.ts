import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CreateBookingPageRoutingModule } from './create-booking-routing.module';

import { CreateBookingPage } from './create-booking.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CreateBookingPageRoutingModule
  ],
  declarations: [CreateBookingPage]
})
export class CreateBookingPageModule {}
