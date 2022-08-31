import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardLivraisonPageRoutingModule } from './card-livraison-routing.module';

import { CardLivraisonPage } from './card-livraison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardLivraisonPageRoutingModule
  ],
  declarations: [
    CardLivraisonPage
  ],
  exports:[
    CardLivraisonPage
  ]
})
export class CardLivraisonPageModule {}
