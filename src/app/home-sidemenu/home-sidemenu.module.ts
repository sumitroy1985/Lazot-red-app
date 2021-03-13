import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSidemenuPageRoutingModule } from './home-sidemenu-routing.module';

import { HomeSidemenuPage } from './home-sidemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSidemenuPageRoutingModule
  ],
  declarations: [HomeSidemenuPage]
})
export class HomeSidemenuPageModule {}
