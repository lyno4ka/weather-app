import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  // API_KEY = '45f09a6099edbd842601fc2bf8cb434b';

  constructor(private http: HttpClient) {
  }

  getCity(): Observable<any> {
    console.log(this.http);
    // return this.http.get('http://battuta.medunes.net/api/city/jp/search/?city=paris&callback=?&key=45f09a6099edbd842601fc2bf8cb434b');

    return this.http.jsonp('http://battuta.medunes.net/api/city/jp/search/?city=paris&callback=getCity()?&key=45f09a6099edbd842601fc2bf8cb434b', 'callback');
  }
}
