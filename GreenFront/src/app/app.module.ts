import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Green1Component } from './green1/green1.component';
import { XTableComponent } from './xtable/xtable.component';

@NgModule({
  declarations: [
    AppComponent,
    Green1Component,
    XTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
