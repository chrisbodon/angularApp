import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() appHello:string;

  constructor(private element: ElementRef) {} // constructor

    @HostListener('mouseenter')
    publiconMouseEnter() {
      console.trace('publiconMouseEnter');
      this.element.nativeElement.style.backgroundColor = this.appHello;

    } // publiconMouseEnter

    @HostListener('mouseleave')
    publiconMouseLeave() {
      console.trace('publiconMouseLeave');
      this.element.nativeElement.style.backgroundColor = "";

    } // publiconMouseLeave
}
