import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSlideToggleChange, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
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
  color: 'primary';
  currentCheckedMinutes: number;
  constructor(private scheduleService: ScheduleService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.scheduleService.getCron().subscribe(res => {
      this.dataSource.data = res;
      this.currentCheckedMinutes = +res[0].cronVal;
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  changeFrequency(f: NgForm): void {
    this.scheduleService.updateCheckFrequency('Check All Sites', f.value.frequencyValue, 1).subscribe(res => {
      this.refreshScheduleTable();
      this.currentCheckedMinutes = f.value.frequencyValue;
      f.resetForm();
    }, err => console.log(err), () =>
      this.openSnackBar('Sites will now be checked every ' + this.currentCheckedMinutes + ' minutes.' , 'Close'));
  }

  editCron(cron): void {
    const dialogRef = this.dialog.open(CronDialogComponent, {
      width: '500px',
      data: cron
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const status = (result.enabled) ? 1 : 0;
        this.scheduleService.updateCron(result.comment, result.cronName, result.cronVal, status, result.cronScript).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  cronToggle(ob: MatSlideToggleChange, cron: Schedule): void {
    const checked = (ob.checked) ? 1 : 0;
    this.scheduleService.updateCron(cron.comment, cron.cronName, cron.cronVal, checked, cron.cronScript).subscribe(res => {
      this.openSnackBar(cron.cronName + ' was ' + ((ob.checked) ? ' enabled.' : 'disabled') , 'Close');
    });
  }

  refreshScheduleTable(): void {
    this.scheduleService.getCron().subscribe(res => {
      this.dataSource.data = res;
      this.currentCheckedMinutes = +res[0].cronVal;
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
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
