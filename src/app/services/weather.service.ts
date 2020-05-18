import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IDays} from '../interfaces/weather.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // API_KEY: string = 'ae5dd48653ac408da0ac27d9ac5f2807';
  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<IDays> {
    return this.http.get<IDays>('https://api.weatherbit.io/v2.0/forecast/daily?city=Kharkiv&days=5&key=ae5dd48653ac408da0ac27d9ac5f2807');
  }
}
