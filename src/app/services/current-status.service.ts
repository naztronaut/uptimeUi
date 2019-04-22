import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurrentStatus} from '../model/current-status';

@Injectable({
  providedIn: 'root'
})
export class CurrentStatusService {

  constructor(private http: HttpClient) { }

  getCurrentStatus(): Observable<CurrentStatus[]> {
    return this.http.get<CurrentStatus[]>('http://192.168.1.54/uptime/getCurrentStatus');
  }
}
