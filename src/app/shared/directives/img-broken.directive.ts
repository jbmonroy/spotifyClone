import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const { nativeElement } = this.elHost;
    nativeElement.src = 'assets/img/404.gif'
  }
  constructor(private elHost: ElementRef) { }

  
}
