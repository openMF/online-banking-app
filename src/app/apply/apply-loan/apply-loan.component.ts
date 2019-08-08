import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

  today = new Date();
  date = '';
  currency = 'Indian Rupee (INR)';
  loans = ['Installment Loans', 'Secured Personal Loans', 'Fixed Rate Loans', 'Variable-Interest Loans', 'Unsecured Personal Loans'];
  purposes = ['Tailoring shop', 'Small Provision store', 'Agriculture', 'Cattle rearing', 'Crops', 'Others'];
  constructor() { }

  ngOnInit() {
    this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
  }
}
