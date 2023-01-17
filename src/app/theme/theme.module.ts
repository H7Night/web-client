import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class ThemeModule { }
