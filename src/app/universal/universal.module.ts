import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UniversalRoutingModule } from './universal-routing.module';
import { UniversalComponent } from './universal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    UniversalRoutingModule
  ],
  declarations: [UniversalComponent],
  exports: [UniversalComponent]
})
export class UniversalModule { }
