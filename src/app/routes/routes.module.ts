import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from "./dashboard/dashboard.component";

const COMPONENTS: any[] = [
  DashboardComponent
]

const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC,
  ],
})
export class RoutesModule { }
