import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-details-address',
  templateUrl: './patient-details-address.component.html',
  styleUrls: ['./patient-details-address.component.css']
})
export class PatientDetailsAddressComponent {
  @Input() address: any;
  @Input() index: number = 0;
}
