import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DomController, MenuController } from '@ionic/angular';
import { Produit } from '../models/produit';
import { AuthentificationService } from '../services/authentification.service';
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

  constructor(private produitService: ProduitService,
              private menu: MenuController,
              private authService: AuthentificationService,
              private router: Router) { }

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
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  showClient(){
    this.router.navigateByUrl('catalogue/client/'+this.authService.userlogged.value?.id);
  }


}
