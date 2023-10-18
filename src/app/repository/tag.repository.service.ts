import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ApiCommonService } from '../data/common/api-common.service';
import { RequestTag } from '../domain/request';
import { IQuestion } from '../domain/question';
import { IResponse } from '../domain/response';
import { ITag } from '../domain/tag';

@Injectable({
  providedIn: 'root'
})
export class TagRepositoryService {

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
   * Получаем список тегов 
   * @param params параметры запроса
   * @param next true - выбирать следующую страницу
   * @returns массив тегов
   */
  getList(params: RequestTag, next: boolean = false): Observable<ITag[]> {
    next && this.subjectHasMore.getValue() ? ++params.page : params.page = 1;
    params.pagesize = this.pageSize;
    return this.apiCommonService.get<IResponse<ITag>>('tags', params)
    .pipe(
      tap((data: IResponse<ITag>) => this.subjectHasMore.next(data.has_more)),
      map((data: IResponse<ITag>) => data.items),
    );
    
  }
}
