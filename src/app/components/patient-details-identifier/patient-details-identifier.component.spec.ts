import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsIdentifierComponent } from './patient-details-identifier.component';

describe('PatientDetailsIdentifierComponent', () => {
  let component: PatientDetailsIdentifierComponent;
  let fixture: ComponentFixture<PatientDetailsIdentifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsIdentifierComponent]
    });
    fixture = TestBed.createComponent(PatientDetailsIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
