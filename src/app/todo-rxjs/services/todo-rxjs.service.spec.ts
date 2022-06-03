import { TestBed } from '@angular/core/testing';

import { TodoRxjsService } from './todo-rxjs.service';

describe('TodoRxjsService', () => {
  let service: TodoRxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoRxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
