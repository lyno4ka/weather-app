import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IData} from '../interfaces/weatherCity.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  // API_KEY = 'ee2eb6e272b04ce7a10132848201905';

  constructor(private http: HttpClient) {
  }

  getWeatherCity(city: string): Observable<IData> {
    return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=ee2eb6e272b04ce7a10132848201905&q=${city}&days=3`);
  }
}



