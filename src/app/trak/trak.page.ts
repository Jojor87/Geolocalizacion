import { Component, NgZone } from '@angular/core';
import { Geolocation} from '@capacitor/core';

@Component({
  selector: 'app-trak',
  templateUrl: './trak.page.html',
  styleUrls: ['./trak.page.scss'],
})
export class TrakPage {
  latitud: number;
  longitud: number;
  altitud: number;
  espera: any;
  constructor(public ngZone: NgZone) { }
  track() {
    this.espera = Geolocation.watchPosition({}, (posicion, err) => { // Obtiene la localización en todo momento
      this.ngZone.run(() => {
        this.latitud = posicion.coords.latitude;
        this.longitud = posicion.coords.longitude;
        this.altitud = posicion.coords.altitude;
      });
    });
  }
  stopTracking() {
    Geolocation.clearWatch({ id: this.espera }); // Clear a given watch 
    this.latitud = null;
    this.longitud = null;
    this.altitud = null;
  }
}
