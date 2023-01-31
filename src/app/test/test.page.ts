import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';
import { map, tap } from 'rxjs/operators';
import { Commande } from '../models/livreur';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit{

  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;
  commande: Commande

  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private plt: Platform,
              private cmdService: CommandeService,
              private router: Router){

                const isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator['standalone'];
                  if (this.plt.is('ios') && isInStandaloneMode()) {
                    console.log('I am a an iOS PWA!');
                    // E.g. hide the scan functionality!
                  }
                }
  ngOnInit(): void {
    this.startScan();
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }
  
  // Helper functions
  // async showQrToast() {
  //   const toast = await this.toastCtrl.create({
  //     message: `Open ${this.scanResult}?`,
  //     position: 'top',
  //     buttons: [
  //       {
  //         text: 'Open',
  //         handler: () => {
  //           (this.scanResult, '_system', 'location=yes');
  //         }
  //       }
  //     ]
  //   });
  //   toast.present();
  // }
  
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
        this.cmdService.getCommandeByCode(code.data).pipe(
          map((value) => {
            this.cmdService.updateCommande(value,'VALIDEE')
            this.router.navigateByUrl('/livreur/details/'+value?.livreur.id);
            // console.log(value);
          })
        //   tap(result => console.log(result))
        ).subscribe();
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
  
}
