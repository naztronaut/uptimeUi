import { Component, OnInit } from '@angular/core';
import {LedService} from '../services/led.service';
import {Led} from '../model/led';
import {Site} from '../model/site';
import {SiteService} from '../services/site.service';
import {ActivityService} from '../services/activity.service';
import {Activity} from '../model/activity';
import {ScheduleService} from '../services/schedule.service';
import {Schedule} from '../model/schedule';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {OutageService} from '../services/outage.service';
import {Outages} from '../model/outages';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [LedService, SiteService, ActivityService, ScheduleService, OutageService]
})
export class DashboardComponent implements OnInit {

  leds: Led[];
  sites: Site[];
  activities: Activity[];
  currentCheckedMinutes: string = '15';
  checkFrequency: Schedule;
  outages: Outages[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: []}
  ];
  constructor(private ledService: LedService, private siteService: SiteService, private activityService: ActivityService,
              private scheduleService: ScheduleService, private outageService: OutageService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getLeds();
    // this.getSites();
  }

  getLeds(): void {
    this.ledService.getLeds().subscribe(res => {
      this.leds = res.slice().reverse();
    }, err => console.log(err), () => this.getSites());
  }

  getSites(): void {
    this.siteService.getSites(5).subscribe(res => {
      this.sites = res;
    }, err => console.log(err), () => this.getActivity());
  }

  getActivity(): void {
    this.activityService.getActivity(5).subscribe(res => {
      this.activities = res;
    }, err => console.log(err), () => this.getSchedule());
  }

  getOutages(): void {
    this.outageService.getOutageChartData().subscribe(res => {
      for(const mon of res) {
        this.barChartLabels.push(this.getMonth(mon.month));
      }

      const temp: number[] = [];
      for(const count of res) {
        temp.push(count.outageCount);
      }
      this.barChartData[0].data = temp;
    });
  }

  getSchedule(): void {
    this.scheduleService.getCron().subscribe(res => {
      this.checkFrequency = res[0];
      this.currentCheckedMinutes = res[0].cronVal;
    }, err => console.log(err), () => this.getOutages());
  }

  changeFrequency(f: NgForm): void {
    this.scheduleService.updateCheckFrequency('Check All Sites', f.value.frequencyValue, 1).subscribe(res => {
      this.currentCheckedMinutes = f.value.frequencyValue;
      f.resetForm();
      this.getSchedule();
    }, err => console.log(err), () =>
      this.openSnackBar('Sites will now be checked every ' + this.currentCheckedMinutes + ' minutes.' , 'Close'));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getMonth(mon: number) : any {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return month[mon - 1];
  }
}
