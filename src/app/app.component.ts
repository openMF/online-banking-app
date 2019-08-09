import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthorizationService } from './services/authorization.service';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private authorizationService: AuthorizationService,
              private router: Router,
              private appService: AppService,
              private authenticationService: AuthenticationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.appService.configObservable.subscribe(userStatus => {
      this.isLoggedIn = userStatus;
    });
  }
  private readonly mobileQueryListener: () => void;
  isLoggedIn = false;
  sidenavContents: any = [
    {
      title: 'login',
      icon: 'person',
      link: 'login'
    },
  ];
  title = 'Online-Banking-App-3.0';
  mobileQuery: MediaQueryList;
  ngOnInit() {}
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  logout() {
    this.authorizationService.userStatus = false;
    this.router.navigate(['/login']).then();
  }
}
