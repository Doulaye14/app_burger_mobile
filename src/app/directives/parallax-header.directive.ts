import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appParallaxHeader]'
})
export class ParallaxHeaderDirective {
  header: any;
  headerHeight: any;
  moveImage: number;
  scaleImage: number;

  constructor(public element: ElementRef,
    public renderer: Renderer2,
    private domCtrl: DomController) { }

    ngOnInit(){
      let content = this.element.nativeElement;
      this.header = content.getElementsByClassName('parallax-image')[0];
      this.domCtrl.read(() =>{
      this.headerHeight = this.header.clientHeight;
      })
    }


  @HostListener('ionScroll', ['$event']) onContentScroll($event: { detail: { scrollTop: any; }; }){
    const scrollTop = $event.detail.scrollTop;    
    this.domCtrl.write(() => {
      if (scrollTop > 0) {
        this.moveImage = scrollTop / 2;
        this.scaleImage = 1;
      }else{

      }
      this.renderer.setStyle(this.header, 'webkitTransform',
      'translate3d(0,' + this.moveImage + 'px 0) scale('+ this.scaleImage + ','+ this.scaleImage +')');
    })
  }

}
