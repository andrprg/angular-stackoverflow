
export interface ISettings {
    apiSiteParameter: string; // Выбранный сайт для запросов
}

export type ISettingsReadonly = Readonly<ISettings>;