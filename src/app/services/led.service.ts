import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Led} from '../model/led';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LedService {

  constructor(private http: HttpClient) { }

  getLeds(): Observable<Led[]> {
    return this.http.get<Led[]>(environment.api + 'getLeds');
  }

  updateLedActive(color, active): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('color', color);
    Params = Params.append('active', active);
    return this.http.put<any>(environment.api + 'changeLedActive', Params);
  }
}
