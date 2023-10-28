import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { ApiCommonService } from '../data/common/api-common.service';
import { RequestAnswer, RequestQuestion } from '../domain/request';
import { IResponse } from '../domain/response';
import { IAnswer } from '../domain/answer';
import { PaginationService } from './pagination.service';
import { MessagesService } from '../data/common/messages.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerRepositoryService extends PaginationService {
  
    constructor(
      private apiCommonService: ApiCommonService,
      private messageService: MessagesService,
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
      return this.apiCommonService.get<IResponse<IAnswer>>('answers', this.paramsQuery)
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
  loadInitialData(params?: RequestAnswer): Observable<IAnswer[]> {
    this.paramsQuery = params ? params : new RequestAnswer();
    return this.getList().pipe(
      catchError(error => {
        this.messageService.showErrors('Ошибка при загрузке данных');
        return EMPTY;
      })
    );
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
