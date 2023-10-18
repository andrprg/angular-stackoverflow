import { Injectable } from '@angular/core';
import { ApiCommonService } from '../data/common/api-common.service';
import { BehaviorSubject, EMPTY, Observable, catchError, delay, lastValueFrom, map, shareReplay, take, tap } from 'rxjs';
import { IQuestion } from '../domain/question';
import { IResponse } from "../domain/response";
import { RequestQuestion } from '../domain/request';
import { PaginationService } from './pagination.service';
import { MessagesService } from '../data/common/messages.service';
import { LoadingService } from '../data/common/loading.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionRepositoryService extends PaginationService {

  constructor(
    private apiCommonService: ApiCommonService,
    private messageService: MessagesService,
  ) {
    super();
  }

  /**
   * Получаем список вопросов 
   * @param params параметры запроса
   * @param next true - выбирать следующую страницу
   * @returns массив вопросов
   */
  private getList(): Observable<IQuestion[]> {
    console.log('question next:', this.paramsQuery.page);
    return this.apiCommonService.get<IResponse<IQuestion>>('questions', this.paramsQuery)
      .pipe(
        tap((data: IResponse<IQuestion>) => this.subjectHasMore.next(data.has_more)),
        map((data: IResponse<IQuestion>) => data.items),
        shareReplay()
      );
  }

  /**  
   * Первоначальная загрузка данных
   * @params параметры запроса
   * @returns массив вопросов
   */
  loadInitialData(params?: RequestQuestion): Observable<IQuestion[]> {
    this.paramsQuery = params ? params : new RequestQuestion();
    return this.getList().pipe(
      catchError(error => {
        console.log(error.message);
        this.messageService.showErrors('Ошибка при загрузке данных');
        return EMPTY;
      })
    );
  }

  /**
   * Загрузка следующей страницы
   * @returns массив вопросов
   */
  nextPage(): Observable<IQuestion[]> {
    this.subjectHasMore.getValue() && ++this.paramsQuery.page;
    return this.getList().pipe(
      catchError(error => {
        console.log(error.message);
        this.messageService.showErrors('Ошибка при загрузке данных');
        return EMPTY;
      })
    );
  }
}
