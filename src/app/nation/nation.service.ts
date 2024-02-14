import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NationService {

  constructor(private http:HttpClient) { }

  getUniversities()
  {
    return this.http.get('http://universities.hipolabs.com/search?');
  }

  getIndiaUniversities(){

    return this.http.get("http://universities.hipolabs.com/search?country=india");

  }

  getNepalUniversities(){
    return this.http.get("http://universities.hipolabs.com/search?country=nepal");


  }
}
