import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../models/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class ProfileDialogComponent implements OnInit {

  animal: string;
  name: string;
  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
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
  animal: string;
  name: string;
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
        data: {name: this.name, animal: this.animal}
      });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed ' + result );

        this.animal = result;
      });
    }

}
