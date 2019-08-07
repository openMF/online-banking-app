import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'notifications', component : NotificationsComponent},
  {path: '**', redirectTo : ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
