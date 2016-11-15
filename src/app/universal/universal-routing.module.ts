import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

// import { UniversalComponent } from './universal.component';

const routes: Routes = [
  {
    path: '',
    // component: UniversalComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'about'},
      {path: 'about', loadChildren: '../about/about.module#AboutModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UniversalRoutingModule {
}
