import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{


  newStudent:Student={
    name : "sai",
    id: 0,
    email: 'abc@gmail.com'
  }

  student:any={id:1,name:"john",age:25};
  updatedStudent:any={...this.student,status:'major'};
  
  

  studentList:any[]=[
    {name:"sai",id:10,age:22},
    {name:"krishna",id:11,age:19},
    {name:"venkat",id:12,age:17}
  ]

  constructor(){}
  ngOnInit(): void {
    console.log(this.student);
    console.log(this.updatedStudent);
    console.log(this.newStudent);
    
    
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit():void{
  //   this.studentList.forEach((student:any)=>{
  //     // console.log(student);
  //     if(student.age>=18){
  //       // console.log("major");
  //       student['status']="major";
        
  //     }else{
  //       // console.log("minor");
  //       student['status']="minor";
        
        
  //     }
  //   }
  //   );
  //   console.log(this.studentList);

  // }

 
  

}
