import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStuctureDirective]'
})
// export class StuctureDirectiveDirective implements OnInit{

//   constructor(private tempRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }
//   ngOnInit(): void {

//     if(this.appStuctureDirective){
//       this.vcRef.createEmbeddedView(this.tempRef);
//     }
//     else{
//       this.vcRef.clear;
//     }
    
//   }

//   @Input() appStuctureDirective:boolean;

  

// }

// export class StuctureDirectiveDirective implements OnChanges{

//   constructor(private tempRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }
//   ngOnChanges(changes: SimpleChanges): void {
//     if(this.appStuctureDirective){
//       this.vcRef.createEmbeddedView(this.tempRef);
//     }
//     else{
//       this.vcRef.clear();
//     }
//   }


//   @Input() appStuctureDirective:boolean;
// }

export class StuctureDirectiveDirective implements OnChanges{

  constructor(private tempRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }
  ngOnChanges(changes: SimpleChanges): void {
   
  }


  @Input() set appStuctureDirective(condition:boolean){
    if(condition){
      this.vcRef.createEmbeddedView(this.tempRef);
    }
    else{
      this.vcRef.clear();
    }

  }
}


