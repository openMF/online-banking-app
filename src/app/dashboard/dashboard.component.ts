import {AfterContentInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentInit {
  items = [1, 2, 3, 4];
  items2 = [1, 2, 3];
  show = true;


  constructor() { }
  ngAfterContentInit() {
    this.show = false;
  }
  ngOnInit() {
  }

}
