import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Filter } from 'src/app/types/enums';
import { TodoRxjsService } from '../services/todo-rxjs.service';

@Component({
  selector: 'app-todo-rxjs-footer',
  templateUrl: './todo-rxjs-footer.component.html',
  styleUrls: ['./todo-rxjs-footer.component.scss'],
})
export class TodoRxjsFooterComponent implements OnInit {
  completed$: Observable<number> = new BehaviorSubject(0);
  filterTypes: any = Object.assign({}, Filter);

  constructor(private todoService: TodoRxjsService) {}

  ngOnInit(): void {
    this.getCompleted();
  }

  changeFilter(type: Filter) {
    this.todoService.changeFilter(type);
  }

  getCompleted() {
    this.completed$ = this.todoService.todos$.pipe(
      map((todos) => todos.filter((todo) => todo.completed).length)
    );
  }
}
