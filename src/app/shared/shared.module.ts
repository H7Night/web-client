import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
  MaterialModule,
]
const COMPONENTS: any[] = [BreadcrumbComponent];
const COMPONENTS_DYNAMIC: any[] = [];
@NgModule({

  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class SharedModule { }
