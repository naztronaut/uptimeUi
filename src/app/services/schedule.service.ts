import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Schedule} from '../model/schedule';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getCron(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(environment.api + 'getCron');
  }

  updateCheckFrequency(cronName, cronVal, enabled): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('cronName', cronName);
    Params = Params.append('cronVal', cronVal);
    Params = Params.append('enabled', enabled);

    return this.http.put<any>(environment.api + 'checkFrequency', Params);
  }

  updateCron(comment, cronName, cronVal, enabled, cronScript): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('comment', comment);
    Params = Params.append('cronName', cronName);
    Params = Params.append('cronVal', cronVal);
    Params = Params.append('enabled', enabled);
    Params = Params.append('cronScript', cronScript);

    return this.http.put<any>(environment.api + 'updateCron', Params);
  }
}
