import { TestBed } from '@angular/core/testing';

import { QuestionRepositoryService } from './question.repository.service';

describe('QuestionRepositoryServiceService', () => {
  let service: QuestionRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
