import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/produit';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChildren('slides') slides: IonSlides;
 
  userObj!: FormGroup;
  userConnected!: User;
  
  constructor(private authService: AuthentificationService,
              private formBuilder: FormBuilder,
              private alertController: AlertController,
              private router: Router,
              private loadingController: LoadingController) {}

  ngOnInit(): void {
    this.userObj = this.formBuilder.group({
        email : [null,],
        password: [null,]
    });

  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.login(this.userObj.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.authService.getUserByEmail(this.email.value).subscribe(
          value => {
            this.userConnected = value[0]
            this.authService.userlogged.next(value[0]);
            if(this.userConnected.roles[0] == 'ROLE_LIVREUR'){
              this.router.navigateByUrl('/livreur/details/'+this.userConnected.id, { replaceUrl: true });
            }else if(this.userConnected.roles[0] == 'ROLE_GESTIONNAIRE'){
              this.showAlert()
            }else{
              this.router.navigateByUrl('/catalogue', { replaceUrl: true });
            }
          }
        )
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.error,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );
  }

  // Easy access for form fields
  get email() {
    return this.userObj.get('email');
  }
  
  get password() {
    return this.userObj.get('password');
  }

  showAlert() {
    this.alertController.create({
      header: 'Permission',
      message: 'Non accordée pour gestionnaire',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }
}
