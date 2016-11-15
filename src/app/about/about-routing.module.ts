import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AboutDetailComponent } from './about-detail.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'detail'},
      {path: 'detail', pathMatch: 'full', component: AboutDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule {
}
