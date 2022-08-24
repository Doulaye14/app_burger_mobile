import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CataloguePageRoutingModule } from './catalogue-routing.module';
import { CataloguePage } from './catalogue.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { CardProduitComponent } from './components/card-produit/card-produit.component';
import { CardProduitListComponent } from './components/card-produit-list/card-produit-list.component';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    SharedDirectivesModule,
    IonicHeaderParallaxModule,
    RouterModule,
  ],
  declarations: [
    CataloguePage, 
    CardProduitComponent, 
    CardProduitListComponent,
    SingleProduitComponent
  ],
  exports:[
    CardProduitComponent,
    CardProduitListComponent,
    CardProduitListComponent,
    SingleProduitComponent,
    RouterModule,
  ]
})
export class CataloguePageModule {}
