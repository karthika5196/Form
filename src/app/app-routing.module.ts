import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusCardComponent } from './status-card/status-card.component';

const routes: Routes = [
  {path:"status", component:StatusCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
