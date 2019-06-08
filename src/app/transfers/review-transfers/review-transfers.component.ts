import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../transfers.component';

@Component({
  selector: 'app-review-transfers',
  templateUrl: './review-transfers.component.html',
  styleUrls: ['./review-transfers.component.scss']
})
export class ReviewTransfersComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReviewTransfersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
