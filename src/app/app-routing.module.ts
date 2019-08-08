import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ApplyLoanComponent } from './apply/apply-loan/apply-loan.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'apply-loan', component : ApplyLoanComponent},
  {path: '**', redirectTo : ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
