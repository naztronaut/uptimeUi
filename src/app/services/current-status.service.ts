import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurrentStatus} from '../model/current-status';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentStatusService {

  constructor(private http: HttpClient) { }

  getCurrentStatus(): Observable<CurrentStatus[]> {
    return this.http.get<CurrentStatus[]>(environment.api + 'getCurrentStatus');
  }
}
