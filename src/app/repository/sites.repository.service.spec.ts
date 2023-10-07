import { TestBed } from '@angular/core/testing';

import { SitesRepositoryService } from './sites.repository.service';

describe('SitesRepositoryServiceService', () => {
  let service: SitesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
