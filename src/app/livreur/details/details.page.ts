import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from 'src/app/models/livreur';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { LivreurService } from 'src/app/services/livreur.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  livreur!: Livreur;
  constructor(private livreurService: LivreurService,
              private route: ActivatedRoute,
              private authService: AuthentificationService,
              private router: Router) { }

  ngOnInit() {
    const idLivreur = +this.route.snapshot.params['id'];
    this.livreurService.getLivreurById(idLivreur).subscribe(
      (value) => { 
        this.livreur = value
      }
    )
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
