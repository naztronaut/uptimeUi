import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {CurrentStatusService} from '../services/current-status.service';

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.less'],
  providers: [CurrentStatusService]
})
export class CurrentStatusComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'createdAt', 'site', 'status'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private currentStatusService: CurrentStatusService) {
    currentStatusService.getCurrentStatus().subscribe( res => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
