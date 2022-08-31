import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardCommandePage } from './card-commande.page';

const routes: Routes = [
  {
    path: '',
    component: CardCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardCommandePageRoutingModule {}
