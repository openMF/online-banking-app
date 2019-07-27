import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  userStatus = false;
  constructor() { }
  login(username: string, password: string) {
    if (username === 'self-service' && password === 'password') {
      this.userStatus = true;
    } else {
      this.userStatus = false;
    }

  }


}
