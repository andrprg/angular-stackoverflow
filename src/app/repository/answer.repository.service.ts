import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ApiCommonService } from '../data/common/api-common.service';
import { RequestQuestion } from '../domain/request';
import { IResponse } from '../domain/response';
import { IAnswer } from '../domain/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerRepositoryService {

    /**
   * Можно ли еще загрузить ответы
   */
    private subjectHasMore = new BehaviorSubject<boolean>(true);
    hasMore$ = this.subjectHasMore.asObservable();
  
    pageSize: number = 20;
  
    constructor(
      private apiCommonService: ApiCommonService
    ) { }
  
    /**
     * Получаем список ответов 
     * @param params параметры запроса
     * @param next true - выбирать следующую страницу
     * @returns массив ответов
     */
    getList(params: RequestQuestion, next: boolean = false): Observable<IAnswer[]> {
      next && this.subjectHasMore.getValue() ? ++params.page : params.page = 1;
      params.pagesize = this.pageSize;
      console.log('next:', next,  this.subjectHasMore.getValue(), params.page);
      return this.apiCommonService.get<IResponse<IAnswer>>('questions', params)
      .pipe(
        tap((data: IResponse<IAnswer>) => this.subjectHasMore.next(data.has_more)),
        map((data: IResponse<IAnswer>) => data.items),
      );
      
    }
}
