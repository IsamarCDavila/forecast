import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GeoServiceService } from '../geo-service.service';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements AfterViewInit {
  general: Object = { lat: 50.6987875, lng: -105.2000996 };
  map: Object;
  zoom: number;

  @ViewChild('map', { static: false }) mapRef: ElementRef;
  constructor(private geoService: GeoServiceService) {
  }
  ngOnInit() {
    console.log('localizacion current');
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 3,
        center: this.general
      });
      

    }, 2000)

   
  }
  reset() {
    console.log('reset', localStorage.getItem("latitude"));
    this.general = { lat: -16.4091013, lng: -71.5294017 };
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 4,
      center: this.general
    });
   
  }


}
