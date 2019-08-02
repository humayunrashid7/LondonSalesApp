import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [DashboardComponent, JumbotronComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
