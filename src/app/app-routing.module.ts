import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'profile', component : ProfileComponent},
  {path: '**', redirectTo : ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
