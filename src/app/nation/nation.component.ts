import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NationService } from './nation.service';
import { CartService } from '../cart.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-nation',
  templateUrl: './nation.component.html',
  styleUrls: ['./nation.component.css']
})
export class NationComponent {

  nationalUniversities:any;
  showData:boolean=false;
  constructor(private router:Router,
    private cartService: CartService,
    private nationService:NationService
    ){}

  ngOnIt():void{
   
  }

  navigateToIndia(){
    this.router.navigate(['india']);
    this.nationService.getIndiaUniversities().subscribe(
      (sr)=>{
        this.showData=true;
        this.nationalUniversities=sr;
      }
    )
  }

  navigateToNepal(){
    this.router.navigate(['Nepal']);
    this.nationService.getNepalUniversities().subscribe(
      (sr)=>{
        this.showData=true;
        this.nationalUniversities=sr;
      }
    )
  }
  
  getNationalUniversities(){
    this.nationService.getUniversities().subscribe(
      (successResonse)=>{
        this.showData=true;
        this.nationalUniversities=successResonse;
        console.log(successResonse);
        
      },
      (errorResponse)=>{
        console.log(errorResponse);

      }
    )
  }

  // getNoOfCountries(){

  // }

  addToCart() {

    let top = {id: Math.floor(Math.random() * 100), name: 'men-t-shirt'};

    // console.log(top);

    this.cartService.addItemToCart(top);

  }



}
