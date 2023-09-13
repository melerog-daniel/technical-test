import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PatientCardClickableDirective } from './directives/patient-card-clickable.directive';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientDetailsIdentifierComponent } from './components/patient-details-identifier/patient-details-identifier.component';
import { PatientDetailsAddressComponent } from './components/patient-details-address/patient-details-address.component';
import { PatientDetailsPatientTelecomComponent } from './components/patient-details-patient-telecom/patient-details-patient-telecom.component';
import { PatientDetailsContactComponent } from './components/patient-details-contact/patient-details-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientCardClickableDirective,
    PatientDetailsComponent,
    PatientDetailsIdentifierComponent,
    PatientDetailsAddressComponent,
    PatientDetailsPatientTelecomComponent,
    PatientDetailsContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
