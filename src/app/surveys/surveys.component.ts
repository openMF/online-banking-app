import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  time = 10;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router) {
    }
    ngOnInit(): void {
      this.onTimer();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onTimer() {
    setInterval(
      () => {
        console.log(this.time);
        this.time = this.time - 1;
        if (this.time === 8) {
          this.dialogRef.close();
          this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(() =>
this.router.navigate(['/survey']));

      } }
      , 1000 );
   }

}
@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  inProcess = false;
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private router: Router) {}

  animal: string;
  name: string;
  isReview =  false;
  firstFormGroup: FormGroup;
  questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

  }
  onReview() {
    this.isReview = true;
  }
  onEdit() {
    this.isReview = false;
  }
  onSubmit() {
  this.openDialog();
  console.log('request sent');

  }
 openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onTakeSurvey(){
    this.inProcess = true;
  }
}
