import { Component, OnInit } from '@angular/core';
import { StudentService } from './../services/student.service';
import { Student } from '../models/student';
import { JsonObject } from '../models/json-object';
import axios from 'axios';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
    axios.interceptors.request.use(function(config) {
      const token = localStorage.getItem('access_token');
      if ( token != null ) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }, function(err) {
      return Promise.reject(err);
    });
  }

  public async getStudents(): Promise<void> {
    try {
      const res = await this.studentService.getStudents<JsonObject>();
      this.students = res.data;
      console.log(this.students);
    } catch ( error ) {
      console.error( error );
    }
  }

  public async deleteStudent(id): Promise<void> {
    try {
      const res = await this.studentService.deleteStudent<JsonObject>(id);
      console.log(res);
      window.location = window.location;
    } catch (error) {
      console.error(error);
    }
  }

}
