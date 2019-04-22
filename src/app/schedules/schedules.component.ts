import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ScheduleService} from '../services/schedule.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.less'],
  providers: [ScheduleService]
})
export class SchedulesComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'cronName', 'comment', 'cronScript', 'cronVal', 'enabled', 'updateDate'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private scheduleService: ScheduleService) {
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

}
