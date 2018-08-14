import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordComponent } from './word/word.component';
import { IndexComponent } from './index/index.component'
import {FieldsetModule, } from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';

const routes: Routes = [
  { path: 'word', component: WordComponent },
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: '**', component: IndexComponent }   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule, FieldsetModule, CardModule, BrowserAnimationsModule, InputTextareaModule ]
})
export class AppRoutingModule { }   
export const routingComponents = [ WordComponent, IndexComponent ]
