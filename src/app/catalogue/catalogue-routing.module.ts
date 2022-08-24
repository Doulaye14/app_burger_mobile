import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataloguePage } from './catalogue.page';
import { SingleProduitComponent } from './components/single-produit/single-produit.component';

const routes: Routes = [
  {
    path: 'produit/:id',
    component: SingleProduitComponent
  },
  {
    path: '',
    component: CataloguePage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataloguePageRoutingModule {}
