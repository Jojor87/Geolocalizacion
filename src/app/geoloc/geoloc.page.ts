import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@capacitor/core';

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.page.html',
  styleUrls: ['./geoloc.page.scss'],
})
export class GeolocPage implements OnInit {
  latitude: number;
  longitude: number;
  coords: any;
  constructor() { }
  async getLocalizacion() {
    const position = await Geolocation.getCurrentPosition();
    console.log('Current', position);
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }
  ngOnInit() {
  }

}
