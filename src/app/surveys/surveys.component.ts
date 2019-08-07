import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SurveysService } from '../services/surveys.service';

export interface Surveys {
  survey: string;
  createdBy: string;
  date: string;
  score: string;
}

const ELEMENT_DATA: Surveys[] = [
  {survey: 'Fin-Tech Services', createdBy: 'Mifos', date: '26/02/2018', score: '80'},
  {survey: 'Platform Services', createdBy: 'Mifos', date: '02/03/2018', score: '70'},
  {survey: 'Insurance Services', createdBy: 'Mifos', date: '15/08/2018', score: '100'},
];

@Component({
  selector: 'app-surveys-dialog',
  templateUrl: 'surveys-dialog.html',
})
export class SurveysDialogComponent implements OnInit {
  data = '';
  constructor(
    public dialogRef: MatDialogRef<SurveysDialogComponent>) {
    }
    ngOnInit(): void {
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  displayedColumns: string[] = ['survey', 'createdBy', 'date', 'score', 'action'];
  dataSource = ELEMENT_DATA;
  inProcess = false;
  surveys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private router: Router,
              private surveysService: SurveysService) {}

  isReview =  false;
  firstFormGroup: FormGroup;
  questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  progressValue = 100 / this.questions.length;
  increment = 100 / this.questions.length;
  questionLength = this.questions.length;
  data: any;
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
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
  }
 openDialog(): void {
  const dialogRef = this.dialog.open(SurveysDialogComponent, {
      width: '500px',
    });

  dialogRef.afterClosed().subscribe(result => {
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() =>
    this.router.navigate(['surveys']));
    });
  }

  onTakeSurvey() {
    this.inProcess = true;
  }
  onNext() {
    this.progressValue = this.increment + this.progressValue;
  }
}
