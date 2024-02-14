import { Component } from '@angular/core';
import { UniversityService } from '../university.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent {

  universitiesDataList :any[]=[];
  showTable:boolean;
  country:string="india";
  
  


  constructor(private universityServices:UniversityService,
    private cartService: CartService,
    private router:Router){
    // this.getAllUniversities();

  }
  
  getAllUniversities(){
    this.universityServices.getAllUniversitiesList(this.country).subscribe(
      (successResponse : any)=>{
       this.showTable=true;
       this.universitiesDataList=successResponse;
      //  this.universitiesDataList=successResponse; 
       
        
      },
      (errorResponse : any)=>{
        // this.universitiesDataList=errorResponse;
        console.log(errorResponse);

      }
    )
  }

  addToCart() {
    let menBottom = {id: Math.floor(Math.random() * 100), name: 'men-jeans'};

    this.cartService.addItemToCart(menBottom);
  }
  

  }
