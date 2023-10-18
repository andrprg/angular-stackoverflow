import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ApiCommonService } from '../data/common/api-common.service';
import { RequestAnswer, RequestQuestion } from '../domain/request';
import { IResponse } from '../domain/response';
import { IAnswer } from '../domain/answer';
import { PaginationService } from './pagination.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerRepositoryService extends PaginationService {
  
    constructor(
      private apiCommonService: ApiCommonService
    ) { 
      super();
    }
  
    /**
     * Получаем список ответов 
     * @param params параметры запроса
     * @param next true - выбирать следующую страницу
     * @returns массив ответов
     */
    private getList(): Observable<IAnswer[]> {
      console.log('answer next:',  this.paramsQuery.page);
      return this.apiCommonService.get<IResponse<IAnswer>>('questions', this.paramsQuery.page)
      .pipe(
        tap((data: IResponse<IAnswer>) => this.subjectHasMore.next(data.has_more)),
        map((data: IResponse<IAnswer>) => data.items),
      );      
    }

  /**  
   * Первоначальная загрузка данных
   * @params параметры запроса
   * @returns массив вопросов
   */
  loadInitialData(params?: RequestQuestion): Observable<IAnswer[]> {
    this.paramsQuery = params ? params : new RequestQuestion();
    return this.getList();
  }

  /**
   * Загрузка следующей страницы
   * @returns массив вопросов
   */
  nextPage(): Observable<IAnswer[]> {
    this.subjectHasMore.getValue() && ++this.paramsQuery.page;
    return this.getList();
  }
}
