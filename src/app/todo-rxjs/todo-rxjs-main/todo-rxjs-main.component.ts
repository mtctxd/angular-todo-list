import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Filter } from 'src/app/types/enums';
import { Todo } from 'src/app/types/interfaces';
import { TodoRxjsService } from '../services/todo-rxjs.service';

@Component({
  selector: 'app-todo-rxjs-main',
  templateUrl: './todo-rxjs-main.component.html',
  styleUrls: ['./todo-rxjs-main.component.scss'],
})
export class TodoRxjsMainComponent implements OnInit {
  visibleTodos$: Observable<Todo[]> = new BehaviorSubject([]);

  constructor(private todoService: TodoRxjsService) {}

  ngOnInit(): void {
    this.visibleTodos$ = combineLatest([
      this.todoService.todos$,
      this.todoService.filter$,
    ]).pipe(
      map(([todos, filter]) => {
        switch (filter) {
          case Filter.Active:
            return todos.filter((todo) => !todo.completed);

          case Filter.Completed:
            return todos.filter((todo) => todo.completed);

          default:
            return todos;
        }
      })
    );
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  toogleStatus(id: number) {
    this.todoService.toggleStatus(id);
  }
}
