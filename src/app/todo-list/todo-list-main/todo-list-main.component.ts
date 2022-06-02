import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Filter } from 'src/app/types/enums';
import { Todo } from 'src/app/types/interfaces';

@Component({
  selector: 'app-todo-list-main',
  templateUrl: './todo-list-main.component.html',
  styleUrls: ['./todo-list-main.component.scss'],
})
export class TodoListMainComponent implements OnInit, OnChanges {
  visibleTodos: Todo[] = [];

  @Input() 'todos': Todo[];
  @Input() 'filterType': Filter = Filter.All;
  @Output() deleteTodoEvent = new EventEmitter();
  @Output() changeStatusEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.applyFilter(this.todos, this.filterType);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyFilter(this.todos, this.filterType);
  }

  deleteTodo(id: number) {
    this.deleteTodoEvent.emit(id);
  }

  changeStatus(id: number) {
    this.changeStatusEvent.emit(id);
  }

  applyFilter(todos: Todo[], type: Filter = Filter.All) {
    switch (type) {
      case Filter.Active:
        this.visibleTodos = this.todos.filter((todo) => !todo.completed);
        break;

      case Filter.Completed:
        this.visibleTodos = this.todos.filter((todo) => todo.completed);
        break;

      default:
        this.visibleTodos = [...todos];
        break;
    }
  }
}
