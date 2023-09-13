import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://hapi.fhir.org/baseR4/Patient';

  constructor(private http: HttpClient) { }

  getPatientList(): Observable<any>{
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => response.entry)
    );
  }
}
