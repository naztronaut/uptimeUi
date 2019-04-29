import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Site} from '../model/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) { }

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>('http://192.168.1.54/uptime/getSites');
  }

  updateSite(id, siteName, url, email, active): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('id', id);
    Params = Params.append('siteName', siteName);
    Params = Params.append('url', url);
    Params = Params.append('email', email);
    Params = Params.append('active', active);

    return this.http.put<any>('http://192.168.1.54/uptime/updateSite', Params);
  }
}
