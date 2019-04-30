import { Component, OnInit } from '@angular/core';
import {LedService} from '../services/led.service';
import {Led} from '../model/led';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.less'],
  providers: [LedService]
})
export class LedComponent implements OnInit {

  leds: Led[];
  constructor(private ledService: LedService) { }

  ngOnInit() {
    this.getLeds();
  }

  getLeds(): void {
    this.ledService.getLeds().subscribe(res => {
      this.leds = res;
    });
  }

}
