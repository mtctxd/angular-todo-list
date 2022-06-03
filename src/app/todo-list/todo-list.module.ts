import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListMainComponent } from './todo-list-main/todo-list-main.component';
import { FormsModule } from '@angular/forms';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListService } from './todo-list/todo-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoListComponent, TodoListHeaderComponent, TodoListMainComponent, TodoListFooterComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [TodoListService],
  exports: [TodoListComponent],
})
export class TodoListModule {}
