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
  @Output() addTodoEvent = new EventEmitter<string>();
  @Output() clearCompletedEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.thisInput.nativeElement.focus();
  }

  addTodo() {
    this.addTodoEvent.emit(this.value);
    this.value = '';
  }

  clearCompleted() {
    this.clearCompletedEvent.emit();
  }
}
