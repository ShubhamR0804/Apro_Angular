import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverChange]'
})
export class HoverChangeDirective {

  constructor() { }
  @HostBinding("style.backgroundColor") bgColor:string="";

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor = "yellow";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor = "";
  }

}
