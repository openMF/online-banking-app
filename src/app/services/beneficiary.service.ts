import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
'Fineract-Platform-TenantId': 'default',
Authorization: 'Basic bWlmb3M6cGFzc3dvcmQ='
})
};

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http: HttpClient) { }

  getBeneficiaries(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://demo.openmf.org/fineract-provider/api/v1/self/beneficiaries/tpt?username=mifos&password=password',
     httpOptions);
  }

}
