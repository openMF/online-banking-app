import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  panelOpenState = false;
  questions = [1, 2, 3, 4, 5, 6, 7];
  constructor() { }

  ngOnInit() {
  }

}
