import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {ScheduleService} from '../services/schedule.service';
import {NgForm} from '@angular/forms';
import {Schedule} from '../model/schedule';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.less'],
  providers: [ScheduleService]
})
export class SchedulesComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'cronName', 'comment', 'cronScript', 'cronVal', 'enabled', 'updateDate', 'controls'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private scheduleService: ScheduleService, private dialog: MatDialog) {
    this.scheduleService.getCron().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  changeFrequency(f: NgForm): void {
    console.log(f.value);
    this.scheduleService.updateCheckFrequency('Check All Sites', f.value.frequencyValue, 1).subscribe(res => {
      console.log(res);
    });
  }

  editCron(cron): void {
    const dialogRef = this.dialog.open(CronDialogComponent, {
      width: '500px',
      data: cron
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.scheduleService.updateCron(result.comment, result.cronName, result.cronVal, result.enabled).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

}

@Component({
  selector: 'app-cron-dialog',
  templateUrl: 'schedule-dialog.html',
  styleUrls: ['dialog.less']
})
export class CronDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CronDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Schedule) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
