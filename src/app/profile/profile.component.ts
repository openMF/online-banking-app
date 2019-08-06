import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: 'profile-dialog.html',
})
export class ProfileDialogComponent implements OnInit {
  password: string;
  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>) {
    }
    ngOnInit(): void {
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  male = 'Male';
  female = 'Female';
  others = 'Others';
  user = new User();

  constructor(public dialog: MatDialog) {
    this.user.firstname = 'Warren';
    this.user.middlename = 'Edward';
    this.user.lastname = 'Buffet';
    this.user.number = 9769430801;
    this.user.birthdate = '30/08/1930';
    this.user.address = 'Omaha, Nebraska';
    this.user.gender = 'Male';
   }

  ngOnInit() {
  }
  login() {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
        width: '500px',
      });

    dialogRef.afterClosed().subscribe(result => {

      });
    }

}
