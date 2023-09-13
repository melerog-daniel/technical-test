import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit{

  patientList$ : any[] = [];

  constructor(private patientService: PatientService){}

  ngOnInit(): void {
      this.getPatientList();
  }

  getPatientList(): void{
    this.patientService.getPatientList().subscribe((data) => this.patientList$ = data);
  }
}
