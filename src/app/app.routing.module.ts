import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  TabMulti2Component,
  TabPlusMinus10Component,
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
    path: 'tab/:operator/:number',
    component: TabPlusMinus10Component
  },
  {
    path: 'tab-multi-2',
    component: TabMulti2Component
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

