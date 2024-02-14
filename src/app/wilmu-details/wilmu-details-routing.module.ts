import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WilmuDetailsComponent } from './wilmu-details.component';
import { SportsComponent } from './sports/sports.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { OptComponent } from './opt/opt.component';
import { CptComponent } from './cpt/cpt.component';

const routes: Routes = [
  {path:'',component:WilmuDetailsComponent,children: [
        { path: 'sports', component: SportsComponent },
        { path: 'admissions', component: AdmissionsComponent },
        { path: 'opt', component: OptComponent },
        { path: 'cpt', component: CptComponent }
  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WilmuDetailsRoutingModule { }
