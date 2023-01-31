import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/models/livreur';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-detail-commande-client',
  templateUrl: './detail-commande-client.page.html',
  styleUrls: ['./detail-commande-client.page.scss'],
})
export class DetailCommandeClientPage implements OnInit {

  commande: Commande;

  constructor(private cmdService: CommandeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const idCom = +this.route.snapshot.params['id'];
    this.cmdService.getCommandeById(idCom).subscribe(
      (value) => {this.commande = value
      console.log(this.commande)}
    )
  }

}
