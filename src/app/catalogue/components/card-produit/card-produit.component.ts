import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.scss'],
})
export class CardProduitComponent implements OnInit {

  @Input() product!: Produit;

  constructor(private router: Router) { }

  ngOnInit() {}


  redirectTo(product: Produit){
    this.router.navigateByUrl('catalogue/produit/'+product.id);
  }

}
