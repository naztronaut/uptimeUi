import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Schedule} from '../model/schedule';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getCron(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>('http://192.168.1.54/uptime/getCron');
  }

  updateCheckFrequency(cronName, cronVal, enabled): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('cronName', cronName);
    Params = Params.append('cronVal', cronVal);
    Params = Params.append('enabled', enabled);

    return this.http.put<any>('http://192.168.1.54/uptime/checkFrequency', Params);
  }
}
