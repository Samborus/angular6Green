import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Green1Component } from './green1/green1.component';
import { XTableComponent } from './xtable/xtable.component';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { IndexComponent } from './index/index.component';
import { WordComponent} from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    Green1Component,
    XTableComponent,
    LoggingComponent,
 routingComponents,
IndexComponent,
WordComponent, 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ButtonModule,
    PasswordModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
