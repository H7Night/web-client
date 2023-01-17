import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
  MaterialModule,
]

@NgModule({

  imports: [...MODULES],
  exports: [...MODULES],
  declarations: [],
})
export class SharedModule { }
