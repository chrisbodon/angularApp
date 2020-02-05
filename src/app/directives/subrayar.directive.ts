import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar:string;

  constructor(private element: ElementRef) {} // constructor

    @HostListener('mouseenter')
    publiconMouseEnter() {
      console.trace('publiconMouseEnter');

      if (this.appSubrayar === 'rojo') {
        this.element.nativeElement.style.backgroundColor = 'red';

      } else {
        this.element.nativeElement.style.backgroundColor = this.appSubrayar;

      }
      this.element.nativeElement.style.textDecoration = 'underline';

    } // publiconMouseEnter

    @HostListener('mouseleave')
    publiconMouseLeave() {
      console.trace('publiconMouseLeave');
      this.element.nativeElement.style.backgroundColor = "";
      this.element.nativeElement.style.textDecoration = 'none';

    } // publiconMouseLeave
}
