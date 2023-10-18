import { Injectable } from '@angular/core';
import { SitesRepositoryService } from './sites.repository.service';
import { ISite } from '../domain/site';
import { ISettings, ISettingsReadonly } from '../domain/settings';
import { LocalService } from '../data/common/local.service';

@Injectable({
  providedIn: 'root'
})
export class SettingRepositoryService {

  /**
   * Наименование локальной базы
   */
  private readonly NAME_LOCAL_BASE = 'settings';

  /**
   * Параметры по умолчанию
   */
  private defaultSetting: ISettingsReadonly = {
    apiSiteParameter: 'stackoverflow'
  };

  /**
   * Текущие настройки
   */
  currentSetting: ISettings = {} as ISettings;

  constructor(
    private siteRepositoryService: SitesRepositoryService,
    private localService: LocalService
  ) {
    this.currentSetting = this.get();
  }

  get(): ISettings {
    const result = this.localService.get<ISettings>(this.NAME_LOCAL_BASE);
    if(result) {
      return result;
    }
    this.localService.set<ISettings>(this.NAME_LOCAL_BASE, this.defaultSetting);
    return { ...this.defaultSetting };
  }

  /**
   * Сохранякм настройки приложения
   * @param config 
   */
  set(config: ISettings) {
    this.localService.set<ISettings>(this.NAME_LOCAL_BASE, config);
  }
}
