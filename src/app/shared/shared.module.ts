import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MaterialModule} from '../material.module';
import {ErrorCodeComponent} from './components/error-code/error-code.component';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
  MaterialModule,
]
const COMPONENTS: any[] = [ErrorCodeComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({

  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class SharedModule {
}
