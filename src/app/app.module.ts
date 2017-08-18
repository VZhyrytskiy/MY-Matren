import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabMulti2Component } from './components/tab-multi-2/tab-multi-2.component';
import { TabPlus2Component } from './components/tab-plus-2/tab-plus-2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabMulti2Component,
    TabPlus2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
