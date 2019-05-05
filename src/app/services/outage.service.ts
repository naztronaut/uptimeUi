import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Outages} from '../model/outages';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutageService {

  constructor(private http: HttpClient) { }

  getOutages(limit: number): Observable<Outages[]> {
    return this.http.get<Outages[]>(environment.api + 'getOutages?limit=' + limit);
  }
}
