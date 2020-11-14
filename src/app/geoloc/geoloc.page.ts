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
  posicion: any;
  constructor() { }
  async getLocalizacion() {
    this.posicion = await Geolocation.getCurrentPosition(); // nos devuelve las cordenadas
    console.log('Actual', this.posicion);
    this.latitud = this.posicion.coords.latitude;
    this.longitud = this.posicion.coords.longitude;
  }
  ngOnInit() {

  }

}
