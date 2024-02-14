import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GetService } from '../get.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  totalNoOfUniversities: number = null;

  noOfItemsInCart: number = null;

  noOfCnt:number=null;

  constructor(private router:Router, private getService: GetService, private cartService: CartService){
    
  }

  ngOnInit(): void {


    this.cartService.cartItemsBs$.subscribe(
      (cartIItemsInfo) => {
        console.log(cartIItemsInfo);
        this.noOfItemsInCart = cartIItemsInfo.length;
      }
      );


    this.getService.uniLength$.subscribe(
      (univLen) => {
        this.totalNoOfUniversities = univLen;
      },
      () => {}
    );

    this.getService.cntLength$.subscribe(
      (cL:number)=>{
        this.noOfCnt=cL;
      },()=>{}
    );
  }



  navigateToStudent(){
    this.router.navigate(['student']);
  }
  navigateToStaff(){
    this.router.navigate(['staff']);
  }
  navigateToWilmu(){
    this.router.navigate(['wilmu']);
  }

  navigateToUniversity(){
    this.router.navigate(['university']);
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  navigateToAccount(){
    this.router.navigate(['account']);
  }
  navigateToNation(){
    this.router.navigate(['nation']);
  }
  
  navigateToShopping(){
    this.router.navigate(['shopping']);
  }

  navigateToCompRel(){
    this.router.navigate(['comp-rel']);
  }
  navigateToPopUp(){
    this.router.navigate(['pop-up']);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }



  




  
  getStudentDetails(){
    console.log("students called");
    // alert("students");
  }

  getStaffDetails(){
    console.log("staff called");
    // alert("staff");
  }

  getWilmuDetails(){
    console.log("wilmu called");
    // alert("wilmu");
  }

  


}
