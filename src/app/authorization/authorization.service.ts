import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  userStatus = true;
  constructor() { }
  login(username: string, password: string) {
    if (username === 'selfservice' && password === 'mifos') {
      this.userStatus = true;
    } else {
      this.userStatus = true;
    }

  }


}
