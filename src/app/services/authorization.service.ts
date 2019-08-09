import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  userStatus = false;
  constructor(private authenticationService: AuthenticationService) { }
  login(username: string, password: string) {
    if (username === 'mifos' && password === 'mifos') {
      this.authenticationService.authenticate().subscribe((data) => {});
      this.userStatus = true;
    } else {
      this.userStatus = false;
    }
  }


}
