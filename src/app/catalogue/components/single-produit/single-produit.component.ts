import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.scss'],
})
export class SingleProduitComponent implements OnInit {

  produit!: Produit;

  constructor(private produitService: ProduitService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const idProduit = +this.route.snapshot.params['id'];

    this.produitService.getProduitById(idProduit).subscribe(
      (value) => {
        console.log(value);
      }
    )
  }

}
