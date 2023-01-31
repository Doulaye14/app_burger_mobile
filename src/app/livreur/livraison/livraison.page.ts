import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Commande, Livraison } from 'src/app/models/livreur';
import { LivreurService } from 'src/app/services/livreur.service';
import { AnimationController } from '@ionic/angular';
import { CommandeService } from 'src/app/services/commande.service';
import jsQR from 'jsqr';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {

  commandes: Commande[] = [];
  livraison!: Livraison;
  commande: Commande;

  canvasElement: any;
  canvas: any;
  canvasContext: any;
  videoElement: any;
  video: any;
  loading: HTMLIonLoadingElement;
  scanActive: boolean;
  scanResult: any;

  constructor(private route: ActivatedRoute, 
              private livreurService: LivreurService,
              private alertCtr: AlertController,
              public alertController: AlertController,
              private animationCtrl: AnimationController,
              private loadingCtrl: LoadingController,
              private plt: Platform,
              private cmdService: CommandeService) {

                const isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator['standalone'];
                  if (this.plt.is('ios') && isInStandaloneMode()) {
                    console.log('I am a an iOS PWA!');
                    // E.g. hide the scan functionality!
                  }
              }

  ngOnInit() {

    const id = +this.route.snapshot.params['id'];
    this.livreurService.getLivraisonById(id).subscribe(
      value=> {
        this.livraison = value;
        value.zone.commandes.forEach(com => {
          if (com.status == 'EN COURS') {
            this.commandes.push(com);
          }
        })
      }
    )
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  
  async startScan() {
    // Not working on iOS standalone mode!
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
    
    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);
    
    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();
    
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
    
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
    
      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
    
      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        this.cmdService.getCommandeByCode(code.data).subscribe(
          (value) => {
            this.commande = value;
            console.log(this.commande);
          }
        )
        // this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  stopScan() {
    this.scanActive = false;
  }
  
}
