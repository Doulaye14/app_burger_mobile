import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardProduitPage } from './card-produit.page';

const routes: Routes = [
  {
    path: '',
    component: CardProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardProduitPageRoutingModule {}
