import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private router: Router,
              private appService: AppService) {
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
    {
      title: 'Notifications',
      icon: 'notifications',
      link: 'notifications'
    },
  ];
  title = 'Online-Banking-App-3.0';
  mobileQuery: MediaQueryList;
  ngOnInit() {}
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  logout() {
    this.router.navigate(['/login']).then();
  }
  onNotificationComponent() {
    this.router.navigate(['/notifications']);
  }
}
