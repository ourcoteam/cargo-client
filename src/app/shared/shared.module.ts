import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NewAddressComponent } from '../shared/new-address/new-address.component';

import { NewReceiverComponent } from '../shared/new-receiver/new-receiver.component';

import { ShipmentDetailsComponent } from '../shared/shipment-details/shipment-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    NewAddressComponent,
    ShipmentDetailsComponent,
    NewReceiverComponent,
    PaymentCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  exports: [
    NewAddressComponent,
    ShipmentDetailsComponent,
    NewReceiverComponent,
    PaymentCardComponent
  ],
  entryComponents: [
    NewAddressComponent,
    ShipmentDetailsComponent,
    NewReceiverComponent,
    PaymentCardComponent
  ]
})
export class SharedModule {}
