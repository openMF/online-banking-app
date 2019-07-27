import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/authorization/authorization.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AppService } from 'src/app/app.service';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  animal: string;
  name: string;

  selected = 'English (Default)';

  constructor(private router: Router,
              private authService: AuthorizationService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              private appService: AppService
  ) {}

  ngOnInit() {
  }
  login() {
    this.authService.login(this.username, this.password);
    if (this.authService.userStatus === true) {
      this.appService.emitConfig(true);
      this.router.navigate(['/dashboard']).then();
    } else {
      this.appService.emitConfig(false);
      this.openSnackBar('Invalid Credentials', 'close');
      this.router.navigate(['/login']).then();
    }
  }


  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSignUp() {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
}
