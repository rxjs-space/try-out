import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutDetailComponent } from './about-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    AboutDetailComponent
  ]
})
export class AboutModule { }
