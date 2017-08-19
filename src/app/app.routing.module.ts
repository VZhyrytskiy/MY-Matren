import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  TabMulti2Component,
  TabPlus2Component,
  TabPlus3Component,
  PageNotFoundComponent
} from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'tab-multi-2',
    component: TabMulti2Component
  },
  {
    path: 'tab-plus-2',
    component: TabPlus2Component
  },
  {
    path: 'tab-plus-3',
    component: TabPlus3Component
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

