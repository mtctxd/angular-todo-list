import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/types/enums';
import { Todo } from 'src/app/types/interfaces';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss'],
})
export class TodoListFooterComponent implements OnInit {
  filterTypes: any = Object.assign({}, Filter);
  completedCount: number = 0;

  @Input() filterVariants: Filter = Filter.All;
  @Input() todos: Todo[] = [];
  @Output() changeFilterEvent = new EventEmitter();
  @Output() clearAllEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.calculateCompleted();
  }

  ngOnChanges(): void {
    this.calculateCompleted();
  }

  changeFilter(type: Filter) {
    this.changeFilterEvent.emit(type);
  }

  calculateCompleted() {
    this.completedCount = this.todos.filter((todo) => !todo.completed).length;
  }

  clearAll() {
    this.clearAllEvent.emit();
  }
}
