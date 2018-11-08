import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  private courseURL = 'http://localhost/jsonapi/course/course';
  private instructorURL = 'http://localhost/jsonapi/instructor/instructor';
  private studentURL = 'http://localhost/jsonapi/student/student';

  constructor() {}

  public async getCourses<T>(): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: `${this.courseURL}?page[limit]=2`
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  public async getLecturers<T>(): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: `${this.instructorURL}?page[limit]=2`
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  public async getStudents<T>(): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: `${this.studentURL}?page[limit]=2`
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
