import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Geolocation, Toast } = Plugins;
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  title = 'Mapa';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { } // constructor(private activateRoute: ActivatedRoute)

  ngOnInit() {
    // this.identificador = this.activateRoute.snapshot.paramMap.get('myId');
  }

}
