import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRxjsMainComponent } from './todo-rxjs-main.component';

describe('TodoRxjsMainComponent', () => {
  let component: TodoRxjsMainComponent;
  let fixture: ComponentFixture<TodoRxjsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoRxjsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRxjsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
