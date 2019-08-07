import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  constructor(private http: HttpClient) { }

  fetchSurveys(): Observable<any[]> {
    return this.http.get<any[]>('https://demo.openmf.org/fineract-provider/api/v1/surveys?username=mifos&password=password');
  }

}
