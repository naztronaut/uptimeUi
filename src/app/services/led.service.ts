import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Led} from '../model/led';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  constructor(private http: HttpClient) { }

  getLeds(): Observable<Led[]> {
    return this.http.get<Led[]>('http://192.168.1.54/uptime/getLedStatus');
  }
}
