import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less']
})
export class NotificationsComponent implements OnInit {

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['id', 'createdAt', 'content', 'status'];
  constructor(private notificationService: NotificationService) {
    this.notificationService.getNotifications().subscribe(res => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  convertToArray(items) {
    return((items).slice(1, -1).split(','));
  }

}
