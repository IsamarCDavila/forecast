import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {
  geoLocation$: Subject<any> = new Subject<any>();
  public coordenadas;
  private started = false;
  constructor() { }

  getUserLocation(options?) {
    console.log(this.started);
    if (!this.started) {
      this.started = true;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.geoLocation$.next(position);
          this.coordenadas = position;
          console.log('position', position);
          console.log('coordinadas', position.coords.latitude);

          if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("latitude", this.coordenadas.coords.latitude);
            localStorage.setItem("longitude", this.coordenadas.coords.longitude);
          } else {
            console.log( "Sorry, your browser does not support Web Storage..." );
          }



          



        },
        (err) => {
          this.geoLocation$.error(err);
        },
        options
      );
    }
  }

}
