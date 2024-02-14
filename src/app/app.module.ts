import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
// import { WilmuDetailsComponent } from './wilmu-details/wilmu-details.component';
// import { SportsComponent } from './wilmu-details/sports/sports.component';
// import { AdmissionsComponent } from './wilmu-details/admissions/admissions.component';
// import { OptComponent } from './wilmu-details/opt/opt.component';
// import { CptComponent } from './wilmu-details/cpt/cpt.component';
// import { UniversityComponent } from './university/university.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NationComponent } from './nation/nation.component';
import { NepalComponent } from './nation/nepal/nepal.component';
import { IndiaComponent } from './nation/india/india.component';
import { OverviewComponent } from './shopping/overview/overview.component';
import { TableComponent } from './shopping/table/table.component';
import { AbcComponent } from './comp-rel/abc/abc.component';
import { XyzComponent } from './comp-rel/xyz/xyz.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HighlightTextDirective } from './highlight-text/highlight-text.directive';
import { RenderingDirective } from './highlight-text/rendering.directive';
import { StuctureDirectiveDirective } from './highlight-text/stucture-directive.directive';
import { LoginComponent } from './login/login.component';

// import { AccountComponent } from './account/account.component';
// import { CreateComponent } from './account/create/create.component';
// import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    NavigationComponent,
    StudentDetailsComponent,
    StaffDetailsComponent,
    HomeComponent,
   
    OverviewComponent,
    TableComponent,
    AbcComponent,
    XyzComponent,
    PopUpComponent,
    HighlightTextDirective,
    RenderingDirective,
    StuctureDirectiveDirective,
    LoginComponent,
    
    
    
    // AccountComponent,
    // CreateComponent
    // WilmuDetailsComponent,
    // SportsComponent,
    // AdmissionsComponent,
    // OptComponent,
    // CptComponent
    // UniversityComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
