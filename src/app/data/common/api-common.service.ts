import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCommonService {

  private _header: HttpHeaders = new HttpHeaders({ responseType: 'JSON' });

  constructor(private _http: HttpClient) { }

  /**
   * @param url 
   * @param [header] 
   * @returns get 
   */
  public get<T>(url: string, header?: object): Observable<T> {
    header = header ?? this._header;
    return this._http.get<T>(url, header);
  }

  /**
   * @param url 
   * @param body 
   * @param [header] 
   * @returns post 
   */
  public post<T>(url: string, body: object, header?: object): Observable<T> {
    header = header ?? this._header;
    return this._http.post<T>(url, body, header);
  }

  /**
   * @param url 
   * @param [body] 
   * @param [header] 
   * @returns put 
   */
  public put<T>(url: string, body?: object, header?: object): Observable<T> {
    header = header ?? this._header;
    return this._http.put<T>(url, body, header);
  }

  /**
   * @param url 
   * @param [header] 
   * @param [requestBody] 
   * @returns delete 
   */
  public delete<T>(url: string, header?: object, requestBody?: object): Observable<T> {
    const options = {
      headers: header === undefined ? this._header : new HttpHeaders(header as { [key: string]: string | string[] }),
      body: requestBody,
    };
    return this._http.request<T>('delete', url, options);
  }
}
