import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  get<T>(key: string): T | null {
    const itemJson = localStorage.getItem(key);
    if (!itemJson) return null;
    const item = JSON.parse(itemJson);
    return item as T;
  }

  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string) {
    localStorage.removeItem(key);
  }
}
