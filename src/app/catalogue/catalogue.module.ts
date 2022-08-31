import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CataloguePageRoutingModule } from './catalogue-routing.module';
import { CataloguePage } from './catalogue.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { RouterModule } from '@angular/router';
import { CardProduitPageModule } from './card-produit/card-produit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    SharedDirectivesModule,
    IonicHeaderParallaxModule,
    RouterModule,
    CardProduitPageModule
  ],
  declarations: [
    CataloguePage,
  ],
  exports:[
    RouterModule,
  ]
})
export class CataloguePageModule {}
