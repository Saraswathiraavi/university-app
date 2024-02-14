import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path:'',component:AccountComponent, children:[
    {path:'create',component:CreateComponent}
  ]}]
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
