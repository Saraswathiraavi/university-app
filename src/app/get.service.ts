import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  uniLength = new BehaviorSubject<number>(null);

  uniLength$ = this.uniLength.asObservable();

  cntLength= new BehaviorSubject<number>(null);

  cntLength$= this.cntLength.asObservable();

  

  constructor() { }

  setDataInToBs(univLength: number) {
    console.log(univLength);
    this.uniLength.next(univLength);
  }

  getAC(count:number){
    console.log(count);

    this.cntLength.next(count);
       
  }

  
}
