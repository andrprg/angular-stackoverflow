import { TestBed } from '@angular/core/testing';

import { AnswerRepositoryService } from './answer.repository.service';

describe('AnswerRepositoryService', () => {
  let service: AnswerRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
