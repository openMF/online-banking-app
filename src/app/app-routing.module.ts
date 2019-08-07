import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SurveysComponent } from './surveys/surveys.component';
const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'surveys', component : SurveysComponent},
  {path: '**', redirectTo : ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
