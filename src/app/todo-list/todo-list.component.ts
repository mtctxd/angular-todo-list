import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TodoListService } from './todo-list/todo-list.service';
import { Filter } from '../types/enums';
import { Todo } from '../types/interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
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
  ];
  filterType: Filter = Filter.All;
  completedStatus: boolean = false;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {}

  addTodo(event: string) {
    const newTodo: Todo = {
      id: Math.random(),
      userId: 1,
      title: event,
      completed: false,
    };

    this.todos = [...this.todos, newTodo];
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  changeStatus(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });
  }

  changeFilterType(type: Filter) {
    this.filterType = type;
  }

  toggleAll() {
    this.completedStatus = !this.completedStatus;
    this.todos = this.todos.map((todo) => ({
      ...todo,
      completed: this.completedStatus,
    }));
  }

  clearAll() {
    this.todos = [];
  }

  fetchTodos() {
    this.todoListService.getTodos().subscribe((res) => {
      this.todos = [...this.todos, ...res];
    });
  }
}
