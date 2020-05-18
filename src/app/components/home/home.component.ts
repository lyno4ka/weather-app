import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {IDays} from '../../interfaces/weather.interfaces';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CityService} from '../../services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  days: IDays;
  searchForm: FormGroup;
  cities;

  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder,
    private cityService: CityService
  ) {
    this.weatherService.getWeather().subscribe((days: IDays) => {
      if (!days) {
        return;
      }

      console.log(days);
      this.days = days;
    });

    this.cityService.getCity().subscribe((city) => {
      console.log(city);
      this.cities = city;
    });
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      cities: ['']
    });
  }

}
