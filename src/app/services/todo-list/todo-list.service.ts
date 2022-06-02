import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Todo } from 'src/app/types/interfaces';
import { API_TODOS_URL } from 'src/constants';

@Injectable()
export class TodoListService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_TODOS_URL).pipe(map((todos: Todo[]) => {
      return todos.splice(0, 10);
    }));
  }
}
