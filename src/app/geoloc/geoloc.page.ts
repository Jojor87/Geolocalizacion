import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@capacitor/core';

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.page.html',
  styleUrls: ['./geoloc.page.scss'],
})
export class GeolocPage implements OnInit {
  latitud: number;
  longitud: number;
  coords: any;
  constructor() { }
  async getLocalizacion() {
    const position = await Geolocation.getCurrentPosition();
    console.log('Current', position);
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
  }
  ngOnInit() {
  }

}
