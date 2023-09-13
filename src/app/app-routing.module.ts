import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';

const routes: Routes = [
  {
    path: 'patients-list',
    component: PatientsListComponent,
  }
  ,{
    path: 'patient-details/:id',
    component: PatientDetailsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'patients-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
