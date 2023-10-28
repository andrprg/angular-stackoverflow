import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RequestBase } from '../domain/request';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

    /**
   * Можно ли еще загрузить вопросы
   */
    protected subjectHasMore = new BehaviorSubject<boolean>(true);
    hasMore$ = this.subjectHasMore.asObservable();
  
    /**
     * Параметры запроса
     */
    paramsQuery: RequestBase;

  constructor() {
    this.paramsQuery = new RequestBase();
   }
}
