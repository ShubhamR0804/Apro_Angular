import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{

  @Input() customColor!:String;
  @Input() txtColor!:String;
  constructor(private element:ElementRef) { }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.customColor;
    this.element.nativeElement.style.color = this.txtColor;
  }

}
