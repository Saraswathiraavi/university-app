import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { UniversityComponent } from './university.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UniversityComponent,
  
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
   
    RouterModule
  ]
})
export class UniversityModule { }
