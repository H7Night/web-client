import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
]
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  declarations: [],
})
export class SharedModule { }
