import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesSince'
})
export class MinutesSincePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const d = (new Date(value).getTime()) / 1000;
    const timeNow = ((new Date().getTime()) / 1000) - (60 * 60 * 4);
    return Math.ceil((timeNow - d) / 60);
  }
}
