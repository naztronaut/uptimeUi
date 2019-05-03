import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivityService} from '../services/activity.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.less']
})
export class ActivityComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'createdAt',  'sitesAffected', 'activityType'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  limit: number = 500;
  constructor(private activityService: ActivityService) {
    // this.activityService.getActivity(this.limit).subscribe(res => {
    //   this.dataSource.data = res;
    // });
    this.refreshDatatable();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refreshDatatable(): void {
    this.activityService.getActivity(this.limit).subscribe(res => {
      this.dataSource.data = res;
    });
  }

  limitSubmit(f: NgForm): void {
    this.refreshDatatable();
  }
}
