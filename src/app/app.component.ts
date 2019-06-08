import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import * as AOS from 'aos';
import { AuthorizationService } from './authorization/authorization.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    AOS.init(
      {
        duration: 600,
        delay: 50,
        once: true
      }
    );
  }
  title = 'web-self-service-application';
  mobileQuery: MediaQueryList;


   sidenavContents : any = [
    {
      title:"DASHBOARD",
      icon:"home",
      color:"pink",
      link: 'dashboard'
    },
    {
      title:"ACCOUNTS",
      icon:"account_balance",
      link: 'accounts'
    },
    {
      title:"RECENT TRANSACTIONS",
      icon:"monetization_on",
      link: 'recent-transactions'
    },
    {
      title:"CHARGES",
      icon:"monetization_on",
      link: 'charges'
    },
    {
      title:"TRANSFERS",
      icon:"monetization_on",
      link: 'transfers'
    },
    {
      title:"THIRD PARTY TRANSFERS",
      icon:"monetization_on",
      link: 'third-party-transfers'
    },
    {
      title:"BENEFICIARIES",
      icon:"supervised_user_circle",
      link: 'beneficiaries'
    },
    {
      title:"REPORTS",
      icon:"assessment",
      link: 'reports'
    },
    {
      title:"APPLY FOR LOAN",
      icon:"assignment_ind",
      link: 'apply/loan'
    },
    {
      title:"APPLY FOR SAVINGS",
      icon:"assignment_ind",
      link: 'apply/savings'
    },
    {
      title:"APPLY FOR SHARES",
      icon:"assignment_ind",
      link: 'apply/shares'
    },
    {
      title:"PROFILE",
      icon:"person",
      link: 'profile'
    },
    {
      title:"SURVEY",
      icon:"format_list_bulleted",
      link: 'survey'
    },
    {
      title:"ABOUT US",
      icon:"info",
      link: 'about-us'
    },
    {
      title:"HELP",
      icon:"help_outline",
      link:'help'
    },
    {
      title:"login",
      icon:"person",
      link:'login'
    },
    {
      title:"Notifications",
      icon:"notifications",
      link:"notifications"
    },
    {
      title:"Pocket",
      icon:"work",
      link:"pocket"
    }
    
    
  ]
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private authorizationService : AuthorizationService,
    private router : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }
  onNotificationComponent(){
    this.router.navigate(['notifications']);
  }
  onProfileComponent(){
    this.router.navigate(['profile']);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(){
    this.authorizationService.userStatus = false;
    this.router.navigate(['/login']);
  }
}
