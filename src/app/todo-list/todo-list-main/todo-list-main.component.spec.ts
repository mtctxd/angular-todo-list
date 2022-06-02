import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListMainComponent } from './todo-list-main.component';

describe('TodoListMainComponent', () => {
  let component: TodoListMainComponent;
  let fixture: ComponentFixture<TodoListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
