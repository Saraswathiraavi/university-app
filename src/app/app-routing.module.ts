import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { WilmuDetailsComponent } from './wilmu-details/wilmu-details.component';
import { SportsComponent } from './wilmu-details/sports/sports.component';
import { AdmissionsComponent } from './wilmu-details/admissions/admissions.component';
import { OptComponent } from './wilmu-details/opt/opt.component';
import { CptComponent } from './wilmu-details/cpt/cpt.component';
 import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CreateComponent } from './account/create/create.component';
import { NationComponent } from './nation/nation.component';
import { OverviewComponent } from './shopping/overview/overview.component';
import { AbcComponent } from './comp-rel/abc/abc.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { LoginComponent } from './login/login.component';
// import { UniversityComponent } from './university/university.component';

const routes: Routes = [
   { path: '', redirectTo: "home", pathMatch: 'full' },
   {path:'home',component:HomeComponent},
  { path: 'student', component: StudentDetailsComponent },
  { path: 'shopping', component: OverviewComponent },
  { path: 'comp-rel', component: AbcComponent},
  { path: 'staff', component: StaffDetailsComponent },
  { path: 'pop-up', component: PopUpComponent },
  { path: 'login', component: LoginComponent },
  {path:'nation',loadChildren:()=>import('./nation/nation.module').then(m=>m.NationModule)},
  {path:'account',loadChildren:()=>import('./account/account.module').then(m=>m.AccountModule)},
//   {path:'account',component:AccountComponent,children:[
//     {path:'create', component:CreateComponent}
// ]},
  {path:'wilmu',loadChildren:()=>import('./wilmu-details/wilmu-details.module').then(m=>m.WilmuDetailsModule)},
  // {
  //   path: 'wilmu', component: WilmuDetailsComponent, children: [
  //     { path: 'sports', component: SportsComponent },
  //     { path: 'admissions', component: AdmissionsComponent },
  //     { path: 'opt', component: OptComponent },
  //     { path: 'cpt', component: CptComponent }
  //   ]
  // },
  { path: 'university', loadChildren:()=>import('./university/university.module').then(m=>m.UniversityModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
