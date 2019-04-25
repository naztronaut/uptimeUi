import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Outages} from '../model/outages';

@Injectable({
  providedIn: 'root'
})
export class OutageService {

  constructor(private http: HttpClient) { }

  getOutages(): Observable<Outages[]> {
    return this.http.get<Outages[]>('http://192.168.1.54/uptime/getOutages?limit=500');
  }
}
