import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsPatientTelecomComponent } from './patient-details-patient-telecom.component';

describe('PatientDetailsPatientTelecomComponent', () => {
  let component: PatientDetailsPatientTelecomComponent;
  let fixture: ComponentFixture<PatientDetailsPatientTelecomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsPatientTelecomComponent]
    });
    fixture = TestBed.createComponent(PatientDetailsPatientTelecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
