import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'primeng/card';
import { PatientCardClickableDirective } from './directives/patient-card-clickable.directive';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientCardClickableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
