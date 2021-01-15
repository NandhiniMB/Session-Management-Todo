import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component';
import {TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path : 'todos' , component:TodoComponent
  },
  {
    path : 'sessions', component:SessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
