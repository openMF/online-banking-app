import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'beneficiary', component : BeneficiaryComponent},
  {path: '**', redirectTo : ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
