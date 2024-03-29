import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Commande, Zone } from 'src/app/models/livreur';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-card-commande',
  templateUrl: './card-commande.page.html',
  styleUrls: ['./card-commande.page.scss'],
})
export class CardCommandePage implements OnInit {

  @Input() commande!: Commande
  @Input() zone!: Zone
  

  constructor(private alertCtrl: AlertController,
              private cmdService: CommandeService) { }

  ngOnInit() {
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  showCode(com: Commande){
    this.alertCtrl.create({
        header: 'Code',
        message: 'Saisir le code généré !',
        inputs: [
          {
            name: 'place',
            placeholder: 'Entrer votre code',
            handler: (data: any) =>{
              console.log(data);
            }
          },
        ],
        buttons:[
          {
            text: 'Annuler',
          },
          {
            text: 'Valider',
            handler: (data) =>{
              if (data.place == com?.code) {
                this.update(com);
              }else{
                this.errAlert();
              }
              
            }
          }
        ]
    }).then(res => {
      res.present();
    })
  }

  update(com: Commande){
      this.cmdService.updateCommande(com, "VALIDEE");
  }

  errAlert(){
    this.alertCtrl.create({
      header: 'Erreur !',
      message: 'Code invalide !',
      buttons:['Ok']
    }).then(res => {
      res.present();
    })
  }

}
