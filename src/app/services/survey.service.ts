import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders(
  {'Content-Type': 'application/json',
  Authorization: 'Basic bWlmb3M6cGFzc3dvcmQ=',
  'Fineract-Platform-TenantId': 'default',
}
);
const params = new HttpParams().set('username', 'mifos').set('password', 'PASSWORD')
const httpOptions = {
 headers
};
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  fetchSurveys() {

    console.log('Headers are :' + JSON.stringify(headers));
    this.http.get<any[]>('https://mifos:PASSWORD@demo.openmf.org/fineract-provider/api/v1/surveys'
    , httpOptions)
    .subscribe(data => console.log(data));

  }

}
