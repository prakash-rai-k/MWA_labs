import { Component, OnInit, Output, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.css']
})
export class StringListComponent implements OnInit {
  newString:string;
  arrayString: string[];
  optionSelected: string="false";
  myOption:boolean=false;

  myColor:string;

  constructor() { 
    this.newString="";
  }
  
  ngOnInit() {
    this.arrayString=[];
  }  
  
  onInsert(){
    this.myOption = (this.optionSelected==="true")?true:false;
    if(this.newString!="" || this.newString!=null){
      this.arrayString.push(this.newString);
    }
    this.newString="";
  }  
}
