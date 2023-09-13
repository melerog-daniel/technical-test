import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsContactComponent } from './patient-details-contact.component';

describe('PatientDetailsContactComponent', () => {
  let component: PatientDetailsContactComponent;
  let fixture: ComponentFixture<PatientDetailsContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsContactComponent]
    });
    fixture = TestBed.createComponent(PatientDetailsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
