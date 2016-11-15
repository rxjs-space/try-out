import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UniversalModule } from './universal';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UniversalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
