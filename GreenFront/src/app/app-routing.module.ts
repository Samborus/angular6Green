import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordComponent } from './word/word.component';
import { IndexComponent } from './index/index.component'

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'word', component: WordComponent },
  { path: 'index', component: IndexComponent },
  { path: '**', component: IndexComponent }   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [ WordComponent, IndexComponent ]
