import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appPatientCardClickable]'
})
export class PatientCardClickableDirective {

  @Input() id: string = '';

  constructor(private router: Router) { }

  @HostListener('click')
  onClick(): void{
    this.router.navigate(['/patient-details', this.id]);
  }

}
