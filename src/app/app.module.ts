import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import {
  HomeComponent,
  TabMulti2Component,
  TabPlusMinus10Component,
  PageNotFoundComponent,
  ClassSchoolTasksComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    TabMulti2Component,
    TabPlusMinus10Component,
    ClassSchoolTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
