import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaBarbeiroPage } from './area-barbeiro.page';

const routes: Routes = [
  {
    path: '',
    component: AreaBarbeiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaBarbeiroPageRoutingModule {}
