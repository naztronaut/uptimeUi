import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toProperCase'
})
export class ToProperCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(value[0], value[0].toUpperCase());
  }

}
