import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appid='8929f3c2b44b7175a1f80f0ddd92e5ca';

  constructor(private http: HttpClient) { }

  getWeatherData(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID='+this.appid)
  }
}
