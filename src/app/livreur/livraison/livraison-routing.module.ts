import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivraisonPage } from './livraison.page';

const routes: Routes = [
  {
    path: ':id',
    component: LivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivraisonPageRoutingModule {}
