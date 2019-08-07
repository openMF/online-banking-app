import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './MaterialModule/material.module';
import { LoginComponent } from './authentication/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerificationComponent } from './authentication/verification/verification.component';
import { AppService } from './app.service';
import { AuthorizationService } from './authorization/authorization.service';
import { NotificationsComponent, NotificationsDialogComponent } from './notifications/notifications.component';
import { NotificationsService } from './services/notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    VerificationComponent,
    NotificationsComponent,
    NotificationsDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, AuthorizationService, NotificationsService],
  bootstrap: [AppComponent],
  entryComponents : [SignUpComponent, VerificationComponent, ForgotPasswordComponent, NotificationsDialogComponent]
})
export class AppModule { }
