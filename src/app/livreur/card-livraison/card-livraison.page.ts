import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/models/livreur';

@Component({
  selector: 'app-card-livraison',
  templateUrl: './card-livraison.page.html',
  styleUrls: ['./card-livraison.page.scss'],
})
export class CardLivraisonPage implements OnInit {

  @Input() livreur!: Livreur
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  showLivraison(id: number){
      this.router.navigateByUrl('/livreur/livraison/'+id);
  }

}
