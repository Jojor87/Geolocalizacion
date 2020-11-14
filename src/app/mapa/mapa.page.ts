import { Component, OnInit, NgZone } from '@angular/core';
import { Geolocation} from '@capacitor/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  titulo = '';
  latitud = null;
  longitud = null;
  showingCurrent = true;
  constructor(private ngZone: NgZone) { } // constructor(private activateRoute: ActivatedRoute)

  ngOnInit() {
    this.setPosActual();
  }
  async setPosActual() {
    const position = await Geolocation.getCurrentPosition();
    console.log('Current', position);
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
  }
}
