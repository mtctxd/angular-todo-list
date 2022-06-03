import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/types/enums';
import { TodoRxjsService } from '../services/todo-rxjs.service';

@Component({
  selector: 'app-todo-rxjs-footer',
  templateUrl: './todo-rxjs-footer.component.html',
  styleUrls: ['./todo-rxjs-footer.component.scss']
})
export class TodoRxjsFooterComponent implements OnInit {
  filterTypes: any = Object.assign({}, Filter);

  constructor(private todoService: TodoRxjsService) {}

  ngOnInit(): void {
  }

  changeFilter(type: Filter) {
    this.todoService.changeFilter(type);
  }

}
