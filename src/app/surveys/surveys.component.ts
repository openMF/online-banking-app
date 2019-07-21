import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
    private router: Router,
    private surveysService: SurveyService) {
    }
    ngOnInit(): void {
      // this.onTimer();
      console.log('here');
      this.surveysService.fetchSurveys();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onTimer() {
    console.log('reached ontimer');
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;
  inProcess = false;
  surveys = [1,2,3,4,5,6,7,8,9,10];
  // tslint:disable-next-line: variable-name
  
  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder,
              public dialog: MatDialog,
              private router: Router,
              private surveysService: SurveyService) {}

  animal: string;
  name: string;
  isReview =  false;
  firstFormGroup: FormGroup;
  questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  progress_value = 100 / this.questions.length;
  increment = 100 / this.questions.length;
  questionLength = this.questions.length; 
  data: any;
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.surveysService.fetchSurveys();

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

  onTakeSurvey() {
    this.inProcess = true;
  }
  onNext() {
    this.progress_value = this.increment + this.progress_value;
  }
}
