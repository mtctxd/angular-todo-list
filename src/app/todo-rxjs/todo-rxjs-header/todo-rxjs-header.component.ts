import { Component, OnInit } from '@angular/core';
import { TodoRxjsService } from '../services/todo-rxjs.service';

@Component({
  selector: 'app-todo-rxjs-header',
  templateUrl: './todo-rxjs-header.component.html',
  styleUrls: ['./todo-rxjs-header.component.scss'],
})
export class TodoRxjsHeaderComponent implements OnInit {
  text: string = '';

  constructor(private todoService: TodoRxjsService) {}

  ngOnInit(): void {}

  changeText(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.text = value;
  }

  addTodo() {
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
