import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  
  recent = [1, 2, 3, 4, 5];
  arrNumber: number[] = [];
  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }
  deleteRecentNotification(i: number) {
    this.recent.splice(i, 1);
    this.openSnackBar('Successfully deleted !', 'Close');
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
