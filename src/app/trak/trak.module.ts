import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrakPageRoutingModule } from './trak-routing.module';

import { TrakPage } from './trak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrakPageRoutingModule
  ],
  declarations: [TrakPage]
})
export class TrakPageModule {}
