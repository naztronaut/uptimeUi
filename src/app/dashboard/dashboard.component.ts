import { Component, OnInit } from '@angular/core';
import {LedService} from '../services/led.service';
import {Led} from '../model/led';
import {Site} from '../model/site';
import {SiteService} from '../services/site.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [LedService, SiteService]
})
export class DashboardComponent implements OnInit {

  leds: Led[];
  sites: Site[];
  constructor(private ledService: LedService, private siteService: SiteService) { }

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
    });
  }

}
