import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Geolocation, Toast } = Plugins;
import { MapaPageRoutingModule } from './mapa-routing.module';

import { MapaPage } from './mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    MapaPageRoutingModule,
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
