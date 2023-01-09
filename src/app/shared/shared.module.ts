import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const MODULES: any[] = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
]

const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  declarations: [...COMPONENTS_DYNAMIC],
})
export class SharedModule { }
