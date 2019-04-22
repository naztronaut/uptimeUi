import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivity(): Observable<Activity[]> {
    return this.http.get<Activity[]>('http://192.168.1.54/uptime/getActivity?limit=1000');
  }
}
