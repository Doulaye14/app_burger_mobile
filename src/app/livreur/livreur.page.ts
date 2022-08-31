import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonItemOption } from '@ionic/angular';
import { Livreur } from '../models/livreur';
import { LivreurService } from '../services/livreur.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.page.html',
  styleUrls: ['./livreur.page.scss'],
})
export class LivreurPage implements OnInit {

  

  constructor(private livreurService: LivreurService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  getIdLivraison(item: IonItemOption){
     
  }


  

}
