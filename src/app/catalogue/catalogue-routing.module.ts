import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataloguePage } from './catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: CataloguePage
  },
  {
    path: 'card-produit',
    loadChildren: () => import('./card-produit/card-produit.module').then( m => m.CardProduitPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
