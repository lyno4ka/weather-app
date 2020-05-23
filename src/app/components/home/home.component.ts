import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CityService} from '../../services/city.service';
import {IData} from '../../interfaces/weatherCity.interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  days: IData;
  searchForm: FormGroup;

    constructor(
    private fb: FormBuilder,
    private cityService: CityService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.fb.group({
      cities: ['']
    });
  }

  getWeatherByCityName() {
    this.cityService.getWeatherCity(this.searchForm.get('cities').value).subscribe((data: IData) => {
      this.days = data;
    });
  }
}
