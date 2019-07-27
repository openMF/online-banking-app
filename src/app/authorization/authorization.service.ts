import { Injectable } from '@angular/core';
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
