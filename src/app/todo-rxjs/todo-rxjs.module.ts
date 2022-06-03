import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRxjsComponent } from './todo-rxjs.component';
import { TodoRxjsHeaderComponent } from './todo-rxjs-header/todo-rxjs-header.component';
import { TodoRxjsMainComponent } from './todo-rxjs-main/todo-rxjs-main.component';
import { TodoRxjsFooterComponent } from './todo-rxjs-footer/todo-rxjs-footer.component';
import { TodoRxjsService } from './services/todo-rxjs.service';

@NgModule({
  declarations: [
    TodoRxjsComponent,
    TodoRxjsHeaderComponent,
    TodoRxjsMainComponent,
    TodoRxjsFooterComponent,
  ],
  imports: [CommonModule],
  exports: [TodoRxjsComponent],
  providers: [TodoRxjsService]
})
export class TodoRxjsModule {}
