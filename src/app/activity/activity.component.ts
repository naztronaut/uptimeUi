import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivityService} from '../services/activity.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

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
  constructor(private activityService: ActivityService) {
    this.activityService.getActivity().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
