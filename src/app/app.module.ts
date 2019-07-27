import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './MaterialModule/material.module';
import { ChartsModule } from 'ng2-charts';
import { AccountsComponent } from './accounts/accounts.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { ChargesComponent } from './charges/charges.component';
import { TransfersComponent } from './transfers/transfers.component';
import { ThirdPartyTransfersComponent } from './third-party-transfers/third-party-transfers.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ReportsComponent } from './reports/reports.component';
import { LoanComponent } from './apply/loan/loan.component';
import {SavingComponent } from './apply/saving/savings.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ShareComponent } from './apply/share/shares.component';
import { LoansComponent } from './accounts/loans/loans.component';
import { LoginComponent } from './authentication/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationService } from './authorization/authorization.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ToolbarItemDirective } from './directives/toolbar-item.directive';
import { VerificationComponent } from './authentication/verification/verification.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SavingsComponent } from './accounts/savings/savings.component';
import { SharesComponent } from './accounts/shares/shares.component';
import { PocketComponent } from './pocket/pocket.component';
import { ReviewTransfersComponent } from './transfers/review-transfers/review-transfers.component';
import { ReviewThirdPartyTransfersComponent } from './third-party-transfers/review-transfers/review-transfers.component';
import { HelpComponent } from './help/help.component';
import { AppService } from './app.service';
import { SurveysComponent, DialogOverviewExampleDialogComponent } from './surveys/surveys.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    RecentTransactionsComponent,
    ChargesComponent,
    TransfersComponent,
    ThirdPartyTransfersComponent,
    BeneficiariesComponent,
    ReportsComponent,
    LoanComponent,
    SavingComponent,
    SavingsComponent,
    ShareComponent,
    AboutUsComponent,
    HelpComponent,
    DashboardComponent,
    SharesComponent,
    LoansComponent,
    LoginComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    ToolbarItemDirective,
    VerificationComponent,
    AccountDetailsComponent,
    ProfileComponent,
    SurveysComponent,
    NotificationsComponent,
    PocketComponent,
    ReviewTransfersComponent,
    ReviewThirdPartyTransfersComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [AuthorizationService, AppService],
  bootstrap: [AppComponent],
  entryComponents : [SignUpComponent, VerificationComponent, DialogOverviewExampleDialogComponent]
})
export class AppModule { }
