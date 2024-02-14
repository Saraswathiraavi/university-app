import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WilmuDetailsRoutingModule } from './wilmu-details-routing.module';
import { WilmuDetailsComponent } from './wilmu-details.component';
import { SportsComponent } from './sports/sports.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { CptComponent } from './cpt/cpt.component';
import { OptComponent } from './opt/opt.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WilmuDetailsComponent,
    SportsComponent,
    AdmissionsComponent,
    OptComponent,
    CptComponent

  ],
  imports: [
    CommonModule,
    WilmuDetailsRoutingModule,
    RouterModule
    
  ]
})
export class WilmuDetailsModule { }
