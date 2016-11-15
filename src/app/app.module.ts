import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UniversalModule } from './universal';
import { AppRoutingModule } from './app-routing.module';

import { AppDetailComponent } from './app-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    UniversalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
