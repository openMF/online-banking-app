import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { TransferComponent } from './transfers/transfer/transfer.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'transfer', component : TransferComponent},
  {path: '**', redirectTo : ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
