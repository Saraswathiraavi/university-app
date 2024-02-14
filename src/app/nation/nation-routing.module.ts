import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NationComponent } from './nation.component';
import { IndiaComponent } from './india/india.component';
import { NepalComponent } from './nepal/nepal.component';

const routes: Routes = [
  {path:'',component:NationComponent,children:[
    {path:"india",component:IndiaComponent},
    {path:'nepal',component:NepalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NationRoutingModule { }
