import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.page.html',
  styleUrls: ['./card-produit.page.scss'],
})
export class CardProduitPage implements OnInit {

  @Input() product!: Produit;
  @Input() isGrid!: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectTo(product: Produit){
    this.router.navigateByUrl('catalogue/details/'+product.id);
  }

}
