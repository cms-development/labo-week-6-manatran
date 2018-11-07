import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  private fetchURL = 'http://localhost/jsonapi/instructor/instructor';

  constructor() {}

  public async getLecturers<T>(): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: this.fetchURL
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  public async getLecturer<T>(id: string): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: `${this.fetchURL}/${id}`
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

