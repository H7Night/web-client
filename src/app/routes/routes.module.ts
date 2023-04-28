import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AboutComponent } from './Page/about/about.component';

@NgModule({
    imports: [SharedModule, RoutesRoutingModule],
    declarations: [DashboardComponent, HomeComponent, Error403Component,Error404Component,Error500Component, AboutComponent],
    entryComponents: [],
})
export class RoutesModule { }
