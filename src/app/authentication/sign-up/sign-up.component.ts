import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../login/login.component';
import { VerificationComponent } from '../verification/verification.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username : string;
  password : string;
  animal: string;
  name: string;
  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSignUp(){
    this.onNoClick();
    this.openDialog();

  }
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(VerificationComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
