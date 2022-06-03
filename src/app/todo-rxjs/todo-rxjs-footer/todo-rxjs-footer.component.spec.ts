import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRxjsFooterComponent } from './todo-rxjs-footer.component';

describe('TodoRxjsFooterComponent', () => {
  let component: TodoRxjsFooterComponent;
  let fixture: ComponentFixture<TodoRxjsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoRxjsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRxjsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
