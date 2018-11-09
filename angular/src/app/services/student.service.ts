import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private fetchURL = 'http://localhost/jsonapi/student/student';

  constructor() {}

  public async getStudents<T>(): Promise<T> {
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

  public async getStudent<T>(id: string): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: `${this.fetchURL}/${id}?include=field_courses`
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  public async updateStudent<T>(id: string, body: Object): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'patch',
        url: `${this.fetchURL}/${id}`,
        data: body
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  public async createStudent<T>(body: Object): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'post',
        url: this.fetchURL,
        data: body
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  public async deleteStudent<T>(id: string): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'delete',
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
