import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReviewTransfersComponent } from './review-transfers/review-transfers.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewTransfersComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}
