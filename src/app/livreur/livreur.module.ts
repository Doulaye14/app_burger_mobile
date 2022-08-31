import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { LivreurPageRoutingModule } from './livreur-routing.module';

import { LivreurPage } from './livreur.page';
import { CardLivraisonPageModule } from './card-livraison/card-livraison.module';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreurPageRoutingModule,
    CardLivraisonPageModule
  ],
  declarations: [
    LivreurPage
  ],
  exports:[
    LivreurPage
  ],
  providers:[
   
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class LivreurPageModule {}
