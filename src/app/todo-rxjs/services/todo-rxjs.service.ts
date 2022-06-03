import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Filter } from 'src/app/types/enums';
import { Todo } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoRxjsService {
  todos$ = new BehaviorSubject<Todo[]>([
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: true,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
  ]);
  filter$ = new BehaviorSubject<Filter>(Filter.All);

  constructor() {}

  deleteTodo(id: number) {}

  addTodo(text: string) {
    if (text.length > 0) {
      const newTodo: Todo = {
        id: Math.random(),
        userId: Math.random(),
        completed: false,
        title: text,
      };

      const updatedTodos = [...this.todos$.getValue(), newTodo];
      this.todos$.next(updatedTodos);
    }
  }

  changeFilter(type: Filter) {
    this.filter$.next(type);
  }
}
