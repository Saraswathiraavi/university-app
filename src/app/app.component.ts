import { Component, OnInit } from '@angular/core';
import { UniversityService } from './university.service';
import { CountryService } from './country.service';

// import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "UI Tutorial";
  duration:string="hrs"
  name: string[]=["sai","venkat","krishna"];
  id: number[]=[12,11,12];

  constructor(private universityService: UniversityService,private countryService:CountryService) {

  }


  ngOnInit(): void {
    this.getUniversities();
    this.showAllCnt();
  }

  getUniversities() {
    this.universityService.getAllUnivs();
//     .subscribe(
//       (resp) => {
//         console.log(resp)
// ;      },
//       (error) => {

//       }
//     )
  }

  showAllCnt(){
    this.countryService.getAllCountries();
  }

  getAngularTutorial(){
    this.title="Angular Tutorial";
    console.log(this.title);
  alert(this.title);
  }

  getReactTutorial(){
  this.title="React Tutorial";
  console.log(this.title);
  alert(this.title);

  }

  getVueTutorial(){
    this.title="Vue Tutorial";
    console.log(this.title);
    alert(this.title);
  }

  getTutorial(course:string){
    this.title=course;
    console.log(this.title);

  }

  getTutorial1(course:string,hours:string){
    this.title=course;
    this.duration=hours;
    console.log(this.title,this.duration);

  }

 

}

