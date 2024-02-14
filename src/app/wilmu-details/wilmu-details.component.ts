import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wilmu-details',
  templateUrl: './wilmu-details.component.html',
  styleUrls: ['./wilmu-details.component.css']
})
export class WilmuDetailsComponent {
  constructor(private router:Router){

  }

  navigateToAdmissions(type : string){
    this.router.navigate(['wilmu/'+ type]);
  
  }
 

}  

