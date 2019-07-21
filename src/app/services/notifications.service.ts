import { Injectable } from '@angular/core';
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
export class NotificationsService {

  constructor(private http: HttpClient) { }

  fetchNotifications() {

    console.log('Headers are :' + JSON.stringify(headers));
    this.http.get<any[]>('https://demo.openmf.org/fineract-provider/api/v1/notifications'
    , httpOptions)
    .subscribe(data => console.log(data));

  }
}
