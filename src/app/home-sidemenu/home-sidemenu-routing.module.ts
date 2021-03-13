import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSidemenuPage } from './home-sidemenu.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSidemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSidemenuPageRoutingModule {}
