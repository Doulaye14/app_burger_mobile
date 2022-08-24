import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {


  burgers!: Produit[];
  menus!: Produit[];

  header!: any;
  headerHeight!: number
  moveImage!: number
  scaleImage!: number

  isMosaique: boolean = false

  image = "https://img.freepik.com/premium-photo/delicious-burger-with-fun-color-background_191369-190.jpg";

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produitService.getAllProduits().subscribe(
      catalogue => {
        this.burgers = catalogue.burgers;
        this.menus = catalogue.menus
      }
    )
  }

  onViewCatalogue(event: any){
    if(event.target.id == 1){
      this.isMosaique = true;
    }
    if (event.target.id == 2) {
      this.isMosaique = false;
    }
    console.log(this.isMosaique);
  }

}
