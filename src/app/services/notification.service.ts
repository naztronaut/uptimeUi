import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Notification} from '../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotifications(limit: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(environment.api + 'getNotifications?limit=' + limit);
  }
}
