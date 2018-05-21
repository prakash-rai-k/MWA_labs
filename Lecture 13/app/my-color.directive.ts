import { Directive, ElementRef, Renderer2, HostListener,Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[ccMyColor]'
})
export class MyColorDirective {
  @Output() myEvent: EventEmitter<string> = new EventEmitter<string>();

  arrayColor:string[]=["blue","green","red","yellow","black","gray"];;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    let i = (Math.floor(Math.random()*this.arrayColor.length));
    renderer.setStyle(el.nativeElement,"color",this.arrayColor[i]);
   }

   @HostListener("click")
   onClick(){
     let myColor = this.el.nativeElement.style.color;
     this.myEvent.emit(myColor);     
   }

}
