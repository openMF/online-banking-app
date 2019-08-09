import {AfterContentInit, Component, OnInit} from '@angular/core';
import { LoanService } from '../services/loan.service';
import { SavingsService } from '../services/savings.service';
import { SharesService } from '../services/shares.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentInit {
  items = [1, 2, 3, 4];
  items2 = [1, 2, 3];
  show = true;
  totalLoanAccounts = 0;
  totalSavingsAccounts = 0;
  totalSharesAccounts = 0;
  totalAccounts = 0;
  constructor(private loanService: LoanService,
              private savingsService: SavingsService,
              private sharesService: SharesService) { }
  ngAfterContentInit() {
    this.show = false;
  }
  ngOnInit() {
    this.loanService.getLoanAccounts().subscribe((data: any) => {
      this.totalLoanAccounts = data.pageItems.length;
    });
    this.savingsService.getSavingAccounts().subscribe((data: any) => {
      this.totalSavingsAccounts = data.pageItems.length;
    });
    this.sharesService.getShareAccounts().subscribe((data: any) => {
      this.totalSharesAccounts = data.pageItems.length;
    });
    console.log(this.totalLoanAccounts);
  }

}
