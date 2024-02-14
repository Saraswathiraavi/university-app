import { style } from '@angular/animations';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {

  constructor(private elRef:ElementRef){

  }
  ngOnInit(): void {

    (this.elRef.nativeElement as HTMLElement).style.backgroundColor='lightgreen';
    
  }

}
