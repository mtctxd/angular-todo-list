import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRxjsHeaderComponent } from './todo-rxjs-header.component';

describe('TodoRxjsHeaderComponent', () => {
  let component: TodoRxjsHeaderComponent;
  let fixture: ComponentFixture<TodoRxjsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoRxjsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRxjsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
