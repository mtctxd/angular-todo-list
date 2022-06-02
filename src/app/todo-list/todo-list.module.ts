import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListMainComponent } from './todo-list-main/todo-list-main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoListHeaderComponent, TodoListMainComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
