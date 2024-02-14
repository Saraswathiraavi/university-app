import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,} from '@angular/forms';
import { UniversityService } from 'src/app/university.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit{
//   shoppingForm: FormGroup;

//   tableData: any;

//   ngOnInit(): void {
//     this.createTable();
//   }

//   constructor(private fb:FormBuilder, private universityService: UniversityService){

//   }

//   createTable() {
//     this.shoppingForm = this.fb.group({
//        countryName:['']
//   })
//   }

//   submitStudentForm() {
//     console.log(this.shoppingForm.getRawValue());
//     this.universityService.getAllUniversitiesList(this.shoppingForm.getRawValue().countryName).subscribe(
//       (results) => {
//         console.log(results);
//         this.tableData = results;


        
//       },
//       (error) => {

//       }
//     )
//   }



// }

   form:FormGroup;
   table:any;

  constructor(private universityService:UniversityService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.createForm();
  }

  

  createForm(){
    this.form =this.fb.group({
      cName:['']
    })
  }

  

  submitTable() {
    console.log(this.form.getRawValue());
    this.universityService.getAllUniversitiesList(this.form.getRawValue().cName).subscribe(
      (results) => {
        console.log(results);
        this.table= results;


        
      },
      (error) => {

      }
    )
  }
}
  



 


