import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardProduitPageRoutingModule } from './card-produit-routing.module';

import { CardProduitPage } from './card-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardProduitPageRoutingModule
  ],
  declarations: [
    CardProduitPage
  ],
  exports:[
    CardProduitPage
  ]
})
export class CardProduitPageModule {}
