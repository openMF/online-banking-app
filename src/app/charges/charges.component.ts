import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ChargesService } from '../services/charges.service';
import { Charges } from '../models/Charges';



@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount', 'amountOutstanding', 'amountPaid', 'amountWaived', 'amountWrittenOff', 'dueDate'];
  pageSizeOptions = [5, 10, 15, 20];
  constructor(private chargesService: ChargesService) { }
  charges: any;
  dataSource: MatTableDataSource <Charges>;

  tempSource: MatTableDataSource <Charges>;

  sortedData: Charges[];

  pageSize = 10;
  currentPage = 0;
  totalSize = 0;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.charges.slice(start, end);
    this.dataSource = part;
  }
  ngOnInit() {
    this.chargesService.getCharges().subscribe((data: any) => {
      this.charges = data.pageItems;
      console.log('Charges :' + this.charges);
      this.dataSource = new MatTableDataSource(this.charges);
      this.tempSource = this.dataSource;
      this.dataSource.paginator = this.paginator;
      this.totalSize = this.charges.length;
      this.dataSource.sort = this.sort;
      this.iterator();
    });

  }
  applyFilter(filterValue: string) {
    this.dataSource = this.tempSource;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
