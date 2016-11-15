import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AboutDetailComponent } from './about-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'aboutd'},
      {path: 'aboutd', pathMatch: 'full', component: AboutDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule {
}
