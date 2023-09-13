import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsAddressComponent } from './patient-details-address.component';

describe('PatientDetailsAddressComponent', () => {
  let component: PatientDetailsAddressComponent;
  let fixture: ComponentFixture<PatientDetailsAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsAddressComponent]
    });
    fixture = TestBed.createComponent(PatientDetailsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
