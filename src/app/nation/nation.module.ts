import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationRoutingModule } from './nation-routing.module';
import { NationComponent } from './nation.component';
import { NepalComponent } from './nepal/nepal.component';
import { IndiaComponent } from './india/india.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NationComponent,
    NepalComponent,
    IndiaComponent
  ],
  imports: [
    CommonModule,
    NationRoutingModule,
    FormsModule,
    RouterModule
    
  ]
})
export class NationModule { }
