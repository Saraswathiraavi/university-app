import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetService } from './get.service';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  schoolList:any[]=[];

  constructor(private http: HttpClient, private getService: GetService) { }

  getAllUniversitiesList(name:string){
    //const url = ``
    return this.http.get(`http://universities.hipolabs.com/search?country=${name}`);
  }

  getAllUnivs() {
     this.http.get('http://universities.hipolabs.com/search').subscribe(
      (resp: any[]) => {
        console.log(resp);
        this.getService.setDataInToBs(resp.length);
      },
      () => {}
     );
  }


  getAllSchoolList(name:string){
    this.http.get('http://universities.hipolabs.com/search?').subscribe(
      (successResponse:any)=>{
        this.schoolList=successResponse;
        console.log(this.schoolList);
        
      },
      (errorResponse:any)=>{
        console.log(errorResponse);

      }


    
    )
  }
}

// dev - developers - http://universities.dev.hipolabs.com
// qa - testing - http://universities.qa.hipolabs.com
// stage - business people testing - http://universities.stg.hipolabs.com
// production - http://universities.dev.hipolabs.com