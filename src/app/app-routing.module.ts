import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ThirdPartyTransferComponent } from './transfers/third-party-transfer/third-party-transfer.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'third-party-transfer', component : ThirdPartyTransferComponent},
  {path: '**', redirectTo : ''},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
