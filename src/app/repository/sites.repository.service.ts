import { Injectable } from '@angular/core';
import { ApiCommonService } from '../data/common/api-common.service';
import { environment } from 'src/environments/environment';
import { ISite } from 'src/app/domain/site';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesRepositoryService {

  /**
   * список сайтов
   */
  private subjectSites = new BehaviorSubject<ISite[]>([]);
  sites$ = this.subjectSites.asObservable();

  constructor(
    private apiCommonService: ApiCommonService
  ) { }

  /**
   * 
   * @returns Получаем список ссайтов
   */
  getSites(): Observable<ISite[]> {
    const api = `${environment.apiUrl}sites`;
    return this.apiCommonService.get<ISite[]>(api);
  }

}
