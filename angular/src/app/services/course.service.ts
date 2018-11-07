import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private fetchURL = 'http://localhost/jsonapi/course/course';

  constructor() {}

  public async getCourses<T>(): Promise<T> {
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

  public async getCourse<T>(id: string): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: `${this.fetchURL}/${id}?include=field_instructor`
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

