import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
'Fineract-Platform-TenantId': 'default',
Authorization: 'Basic bWlmb3M6cGFzc3dvcmQ=' })
};

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  getLoanAccounts(): Observable<any[]> {
    return this.http.get<any[]>
    ('https://demo.openmf.org/fineract-provider/api/v1/loans?username=mifos&password=password', httpOptions);
  }

}
