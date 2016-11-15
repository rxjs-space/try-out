import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppDetailComponent } from './app-detail.component';

const routes: Routes = [
  {
    path: '', loadChildren: './universal/universal.module#UniversalModule'
    // children: [
    //   // {path: '', pathMatch: 'full', component: AppDetailComponent},
    //   {path: '', loadChildren: './universal/universal.module#UniversalModule'}
    // ]
    // // pathMatch: 'full', 
    // // loadChildren: './universal/universal.module#UniversalModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
