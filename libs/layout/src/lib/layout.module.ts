import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@dc/material';

import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [LayoutComponent],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule {}
