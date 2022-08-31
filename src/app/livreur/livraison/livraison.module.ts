import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivraisonPageRoutingModule } from './livraison-routing.module';

import { LivraisonPage } from './livraison.page';
import { CardCommandePageModule } from '../card-commande/card-commande.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivraisonPageRoutingModule,
    CardCommandePageModule
  ],
  declarations: [LivraisonPage]
})
export class LivraisonPageModule {}
