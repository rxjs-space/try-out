import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversalRoutingModule } from './universal-routing.module';
import { UniversalComponent } from './universal.component';

@NgModule({
  imports: [
    CommonModule,
    UniversalRoutingModule
  ],
  declarations: [UniversalComponent]
})
export class UniversalModule { }
