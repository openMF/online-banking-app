import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { ChargesComponent } from './charges/charges.component';
import { TransfersComponent } from './transfers/transfers.component';
import { ThirdPartyTransfersComponent } from './third-party-transfers/third-party-transfers.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ReportsComponent } from './reports/reports.component';
import { LoanComponent } from './apply/loan/loan.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthorizationService } from './authorization/authorization.service';
import { AuthGuardGuard } from './authorization/auth-guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { ProfileComponent } from './profile/profile.component';
import { SurveysComponent } from './surveys/surveys.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SavingComponent } from './apply/saving/savings.component';
import { ShareComponent } from './apply/share/shares.component';
import { PocketComponent } from './pocket/pocket.component';
import { ChatsComponent } from './chats/chats.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'bar-chart', component: BarChartComponent,   canActivate: [AuthGuardGuard]},

  {path: 'doughnut-chart', component: DoughnutChartComponent, canActivate: [AuthGuardGuard]},

  {path: 'radar-chart', component: RadarChartComponent, canActivate: [AuthGuardGuard]},

  {path: 'accounts', component: AccountsComponent, canActivate: [AuthGuardGuard]},

  {path: 'account-details', component: AccountDetailsComponent, canActivate: [AuthGuardGuard]
  },

  {path: 'recent-transactions', component: RecentTransactionsComponent, canActivate: [AuthGuardGuard]},

  {path: 'charges', component: ChargesComponent, canActivate: [AuthGuardGuard]},

  {path: 'transfers', component: TransfersComponent, canActivate: [AuthGuardGuard]},

  {path: 'third-party-transfers', component: ThirdPartyTransfersComponent, canActivate: [AuthGuardGuard]},

  {path: 'beneficiaries', component: BeneficiariesComponent, canActivate: [AuthGuardGuard]},

  {path: 'reports', component: ReportsComponent, canActivate: [AuthGuardGuard]},

  {path: 'apply/loan', component: LoanComponent, canActivate: [AuthGuardGuard]},

  {path: 'apply/savings', component: SavingComponent, canActivate: [AuthGuardGuard]},

  {path: 'apply/shares', component: ShareComponent, canActivate: [AuthGuardGuard]},

  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardGuard]},

  {path: 'survey', component: SurveysComponent},

  {path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuardGuard]},

  {path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuardGuard]},

  {path: 'pocket', component: PocketComponent, canActivate: [AuthGuardGuard]},

  {path: 'chats', component: ChatsComponent, canActivate: [AuthGuardGuard]},

  {path: 'help', component: HelpComponent, canActivate: [AuthGuardGuard]},

  {path: 'forgot-password', component: ForgotPasswordComponent},

  {path: 'sign-up', component: SignUpComponent},

  {path: 'pagenotfound', component : PageNotFoundComponent},

  {path: '**', redirectTo : 'pagenotfound'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
