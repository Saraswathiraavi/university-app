import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetService } from './get.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  totCntrs:number;

  constructor(private http:HttpClient,private getService:GetService) { }

  getAllCountries(){
    this.http.get("http://universities.hipolabs.com/search").subscribe(
     (sR:any[])=>{
       console.log(sR.length);
       this.getService.getAC(sR.length);

     },
     (eR)=>{}
    );

  }
}
