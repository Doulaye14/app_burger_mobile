import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardClientPageRoutingModule } from './card-client-routing.module';

import { CardClientPage } from './card-client.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardClientPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CardClientPage],
  exports:[
    CardClientPage
  ]
})
export class CardClientPageModule {}
