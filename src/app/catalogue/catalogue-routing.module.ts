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
  {
    path: 'card-client',
    loadChildren: () => import('./card-client/card-client.module').then( m => m.CardClientPageModule)
  },
  {
    path: 'detail-commande-client',
    loadChildren: () => import('./detail-commande-client/detail-commande-client.module').then( m => m.DetailCommandeClientPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
