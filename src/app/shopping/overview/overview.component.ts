import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UniversityService } from 'src/app/university.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  shoppingForm: FormGroup;

  tableData: any;

  ngOnInit(): void {
    this.createTable();
  }

  constructor(private fb:FormBuilder, private universityService: UniversityService){

  }

  createTable() {
    this.shoppingForm = this.fb.group({
       countryName:['']
  })
  }

  submitStudentForm() {
    console.log(this.shoppingForm.getRawValue());
    this.universityService.getAllUniversitiesList(this.shoppingForm.getRawValue().countryName).subscribe(
      (results) => {
        console.log(results);
        this.tableData = results;


        
      },
      (error) => {

      }
    )
  }



}
