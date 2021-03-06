import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {OutageService} from '../services/outage.service';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.less']
})
export class OutagesComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'createdAt', 'numberOfSites', 'sitesAffected'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private outageService: OutageService) {
    this.outageService.getOutages(500).subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  convertToArray(items) {
    return((items).slice(1, -1).split(','));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
