import { Component } from '@angular/core';
import { Geolocation} from '@capacitor/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
}
