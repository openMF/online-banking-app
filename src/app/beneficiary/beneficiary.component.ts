import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BeneficiaryService } from '../services/beneficiary.service';
import {MatSort} from '@angular/material/sort';
export interface Beneficiary {
  id: number;
  account: number;
  accountType: string;
  transferLimit: number;
  name: string;
  officeName: string;
  clientName: string;
  actions: string;
}

const ELEMENT_DATA: Beneficiary[] = [
  {id: 1, account: 123456789, accountType: 'Savings', transferLimit: 11000,
   name: 'Mifos', officeName: 'Mifos Initiative', clientName: 'Cajetan', actions: 'done'},
  {id: 2, account: 456789123, accountType: 'Current', transferLimit: 5000,
   name: 'Mifos', officeName: 'Mifos Initiative', clientName: 'Mark', actions: 'done'},
   {id: 3, account: 753894612, accountType: 'Savings', transferLimit: 11000,
   name: 'Mifos', officeName: 'Mifos Initiative', clientName: 'Elon', actions: 'done'},
];
@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.scss']
})
export class BeneficiaryComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Account', 'AccountType', 'TransferLimit', 'Name', 'OfficeName', 'ClientName', 'Actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private beneficiaryService: BeneficiaryService) { }

  ngOnInit() {
    this.beneficiaryService.getBeneficiaries().subscribe((data: any) => console.log(data));
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
