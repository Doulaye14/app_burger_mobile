import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurPage } from './livreur.page';

const routes: Routes = [
  {
    path: 'livraison',
    loadChildren: () => import('./livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: '',
    component: LivreurPage
  },
  {
    path: 'card-commande',
    loadChildren: () => import('./card-commande/card-commande.module').then( m => m.CardCommandePageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurPageRoutingModule {}
