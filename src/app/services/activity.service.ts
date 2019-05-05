import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../model/activity';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivity(limit: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(environment.api + 'getActivity?limit=' + limit);
  }
}
