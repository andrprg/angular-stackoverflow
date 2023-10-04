import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, delay } from 'rxjs';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('должен быть установлен в true при появлении потока', (done) => {
    const result: boolean[] = [];
    const ob$ = of(null);
    service.loading$.subscribe(data => {
      result.push(data);
      if(result.length === 3) {
        expect(result).toEqual([false, true, false]);
        done();  
      }
    }); 
    service.showLoaderUntilCompleted(ob$).subscribe();
  });
});
