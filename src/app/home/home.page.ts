import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
city="Pretoria"
list
weather
cityData
name
today = Date.now();

  constructor(private service: WeatherService) {
    this.service.getWeatherData(this.city).subscribe(data =>{


      this.list=data;
      this.weather=this.list.list;
      this.cityData=this.list.city;
      this.name=this.cityData.name;


      console.log(data)
     })
  }

onFind(){
  this.service.getWeatherData(this.city).subscribe(data=>{
    this.list = data;
    this.weather=this.list.list;
    this.cityData= this.list.city;
    this.name = this.cityData.name;
    console.log(data);
 })
}
}
