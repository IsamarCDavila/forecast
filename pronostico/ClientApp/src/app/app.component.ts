import { Component, OnInit } from '@angular/core';
import { GeoServiceService } from './geo-service.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  location: Observable<any>;
  constructor(private geoService: GeoServiceService) {
  }
  ngOnInit() {
    this.location = this.geoService.geoLocation$.pipe(
      tap(console.log)
    );

    this.geoService.getUserLocation();

    
  }

}
