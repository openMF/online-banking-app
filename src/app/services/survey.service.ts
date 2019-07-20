import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders();
headers.append('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=');
headers.append('Content-Type', 'application/json');
headers.append('Fineract-Platform-TenantId', 'default');


const httpOptions = {
 headers
};
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  fetchSurveys() {

    console.log(headers);
    this.http.get<any[]>('https://demo.openmf.org/fineract-provider/api/v1/surveys'
    , httpOptions)
    .subscribe(data => console.log(data));

  }

}
