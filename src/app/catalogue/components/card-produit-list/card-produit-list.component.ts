import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-card-produit-list',
  templateUrl: './card-produit-list.component.html',
  styleUrls: ['./card-produit-list.component.scss'],
})
export class CardProduitListComponent implements OnInit {

  @Input() produitList!: Produit; 
  constructor(private router: Router) { }

  ngOnInit() {}

  redirectTo(product: Produit){
    this.router.navigateByUrl('/catalogue/produit/'+product.id);
  }

}
