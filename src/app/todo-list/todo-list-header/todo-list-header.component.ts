import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss'],
})
export class TodoListHeaderComponent implements OnInit, AfterViewInit {
  value = '';

  @ViewChild('thisInput') thisInput!: ElementRef;
  @Input() completedStatus!: boolean;
  @Output() addTodoEvent = new EventEmitter<string>();
  @Output() toggleAllEvent = new EventEmitter<string>();
  @Output() fetchTodosEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.thisInput.nativeElement.focus();
  }

  addTodo() {
    if (this.value.length > 0) {
      this.addTodoEvent.emit(this.value);
    }
    this.value = '';
  }

  toggleAll() {
    this.toggleAllEvent.emit();
  }

  fetchTodos() {
    this.fetchTodosEvent.emit();
  }
}
