import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Site} from '../model/site';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) { }

  getSites(limit: number): Observable<Site[]> {
    return this.http.get<Site[]>(environment.api + 'getSites?limit=' + limit);
  }

  addNewSite(siteName, url, email): Observable<any> {
    let Params = new HttpParams();
    Params = Params.append('siteName', siteName);
    Params = Params.append('url', url);
    Params = Params.append('email', email);

    return this.http.post<any>(environment.api + 'addSite', Params);
  }

  updateSite(id, siteName, url, email, active): Observable<Site[]> {
    let Params = new HttpParams();
    Params = Params.append('id', id);
    Params = Params.append('siteName', siteName);
    Params = Params.append('url', url);
    Params = Params.append('email', email);
    Params = Params.append('active', active);

    return this.http.put<Site[]>(environment.api + 'updateSite', Params);
  }

}
