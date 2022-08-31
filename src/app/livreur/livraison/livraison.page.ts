import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Commande, Livraison } from 'src/app/models/livreur';
import { LivreurService } from 'src/app/services/livreur.service';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {

  commandes: Commande[] = [];
  livraison!: Livraison;
  constructor(private route: ActivatedRoute, 
              private livreurService: LivreurService,
              private alertCtr: AlertController,
              public alertController: AlertController) { }

  ngOnInit() {

    const id = +this.route.snapshot.params['id'];
    this.livreurService.getLivraisonById(id).subscribe(
      value=> {
        this.livraison = value;
        value.zone.commandes.forEach(com => {
          if (com.status == 'EN COURS') {
            this.commandes.push(com);
          }
        })
      }
    )
  }

  
}
