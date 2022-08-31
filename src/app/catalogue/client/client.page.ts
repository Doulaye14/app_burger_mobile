import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Client, Commande } from 'src/app/models/livreur';
import { ClientService } from 'src/app/services/client.service';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  client: Client;
  commandes: Commande[];

  constructor(private clientService: ClientService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.clientService.getClientById(id).pipe(
        map(value => {
          this.client = value;
          this.commandes = value.commandes.filter((com: Commande) => com.status == 'EN COURS');
          console.log(this.commandes);
          
        })
    ).subscribe();
  }

}
