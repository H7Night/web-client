import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './Page/about/about.component';

@NgModule({
    imports: [SharedModule, RoutesRoutingModule],
    declarations: [DashboardComponent, HomeComponent, AboutComponent],
    entryComponents: [],
})
export class RoutesModule { }
