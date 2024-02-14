import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsBs = new BehaviorSubject<{id: number, name: string}[]>([]);

  cartItemsBs$ = this.cartItemsBs.asObservable();

  constructor() { }

  addItemToCart(cartObj: {id: number, name: string}) {
    // console.log(cartObj);
    // this.cartItemsBs.next(cartObj);
    let previousCartItems: {id: number, name: string}[] = this.cartItemsBs.value;
    previousCartItems.push(cartObj);
    this.cartItemsBs.next(previousCartItems);
  }
}
