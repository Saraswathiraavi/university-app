import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { CountryService } from '../country.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isAvailable:boolean=true;
  value=100;

  
  
  constructor(private md:MatDialog){

  }

  popUpFunction(){

    this.md.open(PopUpComponent);

  }

  mgOnIt():void{
   

  }

  
  
  
}
