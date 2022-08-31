import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenusBurger, MenusPortionFrite, MenusTaille, Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  product!: Produit;
  menusBurgers!: MenusBurger[];
  menusPortions!: MenusPortionFrite[];
  menusTailles!: MenusTaille[]

  qntBurger!: number
  qntFrites!: number
  qntTaille!: number

  constructor(private produitService: ProduitService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      const idProduct = this.route.snapshot.params['id'];

      this.produitService.getProduitById(idProduct).subscribe(
        (value) => {
          this.product = value;
          this.menusBurgers = value.menusBurgers;
          this.menusPortions = value.menusPortionFrites;

          if(value.menusTailles){
            value.menusTailles.forEach(element => {
              this.menusTailles = element.taille.tailleBoissons
            });
          } 
          if (value.menusBurgers) { 
            value.menusBurgers.forEach(elt => {
              this.qntBurger = elt.quantity
            })
          }
          
        }
      )
  }

}
