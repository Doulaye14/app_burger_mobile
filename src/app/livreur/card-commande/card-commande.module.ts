import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardCommandePageRoutingModule } from './card-commande-routing.module';

import { CardCommandePage } from './card-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardCommandePageRoutingModule
  ],
  declarations: [CardCommandePage],
  exports:[
    CardCommandePage
  ]
})
export class CardCommandePageModule {}
