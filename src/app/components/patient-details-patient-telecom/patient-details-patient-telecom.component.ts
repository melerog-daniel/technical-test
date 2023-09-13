import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-details-patient-telecom',
  templateUrl: './patient-details-patient-telecom.component.html',
  styleUrls: ['./patient-details-patient-telecom.component.css']
})
export class PatientDetailsPatientTelecomComponent {
  @Input() telecom: any;
  @Input() index: number = 0;
}
