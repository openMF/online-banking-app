import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-party-transfer',
  templateUrl: './third-party-transfer.component.html',
  styleUrls: ['./third-party-transfer.component.scss']
})
export class ThirdPartyTransferComponent implements OnInit {
  today = new Date();
  date = '';
  constructor() { }

  ngOnInit() {
    this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
  }

}
