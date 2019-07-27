import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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

  constructor
( private router: Router,
  private authService: AuthorizationService,
  private snackBar: MatSnackBar,
  public dialog: MatDialog,
  private appService: AppService
  ) { }

  ngOnInit() {
  }
  login() {
    console.log(this.username + this.password);
    this.authService.login(this.username, this.password);
    console.log(this.authService.userStatus);
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
    console.log('Reached@!!!!');
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
