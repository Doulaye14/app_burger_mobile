import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardLivraisonPage } from './card-livraison.page';

const routes: Routes = [
  {
    path: '',
    component: CardLivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardLivraisonPageRoutingModule {}
