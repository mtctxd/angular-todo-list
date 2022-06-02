import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/types/interfaces';

@Component({
  selector: 'app-todo-list-main',
  templateUrl: './todo-list-main.component.html',
  styleUrls: ['./todo-list-main.component.scss'],
})
export class TodoListMainComponent implements OnInit {
  @Input() 'todos': Todo[];
  @Output() deleteTodoEvent = new EventEmitter();
  @Output() changeStatusEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: number) {
    this.deleteTodoEvent.emit(id);
  }

  changeStatus(id: number) {
    this.changeStatusEvent.emit(id);
  }
}
