import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-details-contact',
  templateUrl: './patient-details-contact.component.html',
  styleUrls: ['./patient-details-contact.component.css']
})
export class PatientDetailsContactComponent {
  @Input() contact: any;
  @Input() index: number = 0;
}
