import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  studentForm:FormGroup;
  // firstName:String[];
  // lasrName:string[];
  // email:string[];
  constructor(private fb:FormBuilder)
  {

  }

  ngOnInit():void{

    this.createStudentForm();
  }

   createStudentForm(){
    this.studentForm=this.fb.group({
      firstName:['',Validators.compose([Validators.required,Validators.maxLength(6)])],
      lastName:[''],
      email:['']
    })
    
   }

   submitStudentForm(){
    console.log(this.studentForm);
    console.log(this.studentForm.value);
   }


  }

  
    



