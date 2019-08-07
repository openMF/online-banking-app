import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-notifications-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class NotificationsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NotificationsDialogComponent>) {
    }
    ngOnInit(): void {
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {


  recent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  result: any;
  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {}

  ngOnInit() {
  }

  deleteRecentNotification(i: number) {
    this.recent.splice(i, 1);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openDialog(i: number): void {
    const dialogRef = this.dialog.open(NotificationsDialogComponent, {
        width: '500px',
             });
    dialogRef.afterClosed().subscribe(result => {
        this.result = result;
        if (this.result === true) {
          this.deleteRecentNotification(i);
          this.openSnackBar('Successfully deleted ' + (i + 1) + ' item !', 'Close');
        }
      });
    }
}
