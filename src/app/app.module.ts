import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import {
  HomeComponent,
  TabMulti2Component,
  TabPlus2Component,
  TabPlus3Component,
  PageNotFoundComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    TabMulti2Component,
    TabPlus2Component,
    TabPlus3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
