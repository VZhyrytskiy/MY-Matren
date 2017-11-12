import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import {
  HomeComponent,
  TabMulti2Component,
  TabPlusMinus10Component,
  PageNotFoundComponent
} from './components';
import { UtilsService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    TabMulti2Component,
    TabPlusMinus10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
