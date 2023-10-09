import { Injectable } from '@angular/core';
import { ApiCommonService } from '../data/common/api-common.service';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IQuestion } from '../domain/question';
import { IResponse } from "../domain/response";
import { RequestQuestion } from '../domain/request';


@Injectable({
  providedIn: 'root'
})
export class QuestionRepositoryService {

  /**
   * Можно ли еще загрузить вопросы
   */
  private subjectHasMore = new BehaviorSubject<boolean>(true);
  hasMore$ = this.subjectHasMore.asObservable();

  pageSize: number = 20;

  constructor(
    private apiCommonService: ApiCommonService
  ) { }

  /**
   * Получаем список вопросов 
   * @param params параметры запроса
   * @param next true - выбирать следующую страницу
   * @returns массив вопросов
   */
  getList(params: RequestQuestion, next: boolean = false): Observable<IQuestion[]> {
    next && this.subjectHasMore.getValue() ? ++params.page : params.page = 1;
    params.pagesize = this.pageSize;
    console.log('next:', next,  this.subjectHasMore.getValue(), params.page);
    return this.apiCommonService.get<IResponse<IQuestion>>('questions', params)
    .pipe(
      tap((data: IResponse<IQuestion>) => this.subjectHasMore.next(data.has_more)),
      map((data: IResponse<IQuestion>) => data.items),
    );
    
  }
}
