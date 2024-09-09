import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { RegisterModalComponent } from './login/register-modal/register-modal.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { UserDialogComponent } from './view/user-dialog/user-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterModalComponent,
    UserDialogComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutesRoutingModule,
    MaterialModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule { }
