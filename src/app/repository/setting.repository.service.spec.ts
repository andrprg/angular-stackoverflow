import { TestBed } from '@angular/core/testing';

import { SettingRepositoryService } from './setting.repository.service';

describe('SettingsService', () => {
  let service: SettingRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
