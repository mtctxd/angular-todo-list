import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/types/interfaces';

@Component({
  selector: 'app-todo-list-main',
  templateUrl: './todo-list-main.component.html',
  styleUrls: ['./todo-list-main.component.scss']
})
export class TodoListMainComponent implements OnInit {

  @Input() 'todos': Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
