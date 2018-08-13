import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Green1Component } from './green1/green1.component';
import { XTableComponent } from './xtable/xtable.component';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from './/app-routing.module';
import { WordComponent } from './word/word.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    Green1Component,
    XTableComponent,
    LoggingComponent,
    WordComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
