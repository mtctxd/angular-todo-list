import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoRxjsComponent } from './todo-rxjs/todo-rxjs.component';
import { TodoRxjsModule } from './todo-rxjs/todo-rxjs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    TodoRxjsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
