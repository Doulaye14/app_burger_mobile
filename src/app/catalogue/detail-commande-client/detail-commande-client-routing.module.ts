import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCommandeClientPage } from './detail-commande-client.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetailCommandeClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCommandeClientPageRoutingModule {}
