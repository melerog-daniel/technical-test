import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-details-identifier',
  templateUrl: './patient-details-identifier.component.html',
  styleUrls: ['./patient-details-identifier.component.css']
})
export class PatientDetailsIdentifierComponent {
  @Input() identifier: any;
  @Input() index: number = 0;
}
