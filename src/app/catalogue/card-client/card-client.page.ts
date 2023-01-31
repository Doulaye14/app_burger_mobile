import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client, Commande } from 'src/app/models/livreur';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.page.html',
  styleUrls: ['./card-client.page.scss'],
})
export class CardClientPage implements OnInit {

  @Input() client: Client;
  @Input() commandes: Commande[];
  @Input() isShow: boolean;
  testShow: number
  selected: string = 'EN COURS'

  constructor(private alertCtrl: AlertController, private router: Router) {}

  ngOnInit() {
  }

  showQR(event: any){
    const { click, id } = event.target;
    if (click) {
      this.router.navigateByUrl('/catalogue/detail-commande-client/'+id)
    }
  }

  showCode(com: Commande){
    this.alertCtrl.create({
        header: 'Code',
        message: 'Votre code est : '+ com?.code,
        buttons:['Ok']
    }).then(res => {
      res.present();
    })
  }

  
}

