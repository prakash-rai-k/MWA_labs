import { Directive, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[ccMyVisibility]'
})

export class MyvisibilityDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, "visibility", el.nativeElement.attributes.ccMyVisibility.nodeValue);
  }

  @HostBinding('style.background-color') myBG;
  @HostListener('mouseover')
  onHover(){
    this.myBG = "gray";
  }
  @HostListener('mouseleave')
  onLeave(){
    this.myBG ="white";
  }
}
