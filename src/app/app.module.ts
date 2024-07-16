import {NgModule} from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {ErrorCodeComponent} from './shared/components/error-code/error-code.component';
import {MaterialModule} from './material.module';
import {RoutesRoutingModule} from './routes/routes-routing.module';
import {LoginComponent} from './login/login/login.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        ErrorCodeComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RoutesRoutingModule,
        MaterialModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
