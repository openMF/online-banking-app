import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './MaterialModule/material.module';
import { LoginComponent } from './authentication/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorizationService } from './authorization/authorization.service';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerificationComponent } from './authentication/verification/verification.component';
import { AppService } from './app.service';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { BeneficiaryService } from './services/beneficiary.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    VerificationComponent,
    BeneficiaryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorizationService, AppService, BeneficiaryService],
  bootstrap: [AppComponent],
  entryComponents : [SignUpComponent, VerificationComponent, ForgotPasswordComponent]
})
export class AppModule { }
