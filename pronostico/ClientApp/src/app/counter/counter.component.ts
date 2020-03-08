import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{

  public today: number = Date.now();
  public idLocation_1 = 256930;
  public idLocation;
  private apikey = 'GRztmch8Ilyea0TkDlm7gdl7GsZiIEdk';
  public latitude = localStorage.getItem("latitude");
  public longitude = localStorage.getItem("longitude");

  public forecastsNow;
  public forecastDay; // pronostico del dia dia y noche 
  public forecast; // pronosticos de los 5 los proximos 5 días
  

  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=GRztmch8Ilyea0TkDlm7gdl7GsZiIEdk&q=${this.latitude}%2C${this.longitude}&language=en-us`).subscribe(result => {
      this.idLocation = result;
      this.idLocation = this.idLocation.Key;
      console.log('ID LOCATION', this.idLocation);



      http.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${this.idLocation}?apikey=GRztmch8Ilyea0TkDlm7gdl7GsZiIEdk&language=en-us`).subscribe(result => {
        this.forecastsNow = result;
        console.log('forescast current', this.forecastsNow);
      }, error => console.error(error));

      http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${this.idLocation}?apikey=GRztmch8Ilyea0TkDlm7gdl7GsZiIEdk`).subscribe(result => {
        this.forecastDay = result;
        this.forecastDay = this.forecastDay.DailyForecasts;
        console.log('forescast day', this.forecastDay);
      }, error => console.error(error));

      http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.idLocation}?apikey=GRztmch8Ilyea0TkDlm7gdl7GsZiIEdk`).subscribe(result => {
        this.forecast = result;
        this.forecast = this.forecast.DailyForecasts;
        console.log('forescast 5 days', this.forecast);
      }, error => console.error(error));



    }, error => console.error(error));



    


  }

  ngOnInit() {

      
  }

}
