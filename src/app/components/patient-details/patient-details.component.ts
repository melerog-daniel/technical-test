import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {

  patient$ : any;
  id: string = '';
  private unSubscribe$ = new Subject<void>();

  constructor(private patientService: PatientService, private aRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = this.aRoute.snapshot.paramMap.get('id') as string;
    //console.log('id: ' + this.id)
    this.getPatientDetails();
  }

  getPatientDetails(): void{
    this.patientService.getPatientById(this.id).subscribe((data) => this.patient$ = data);
  }

  backToPatientList(): void{
    this.router.navigateByUrl('/patients-list');
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

}
