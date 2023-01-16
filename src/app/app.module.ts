import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {CoreModule} from "./core/core.module";
import {SharedModule} from './shared/shared.module';
import {RoutesModule} from './routes/routes.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    RoutesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
