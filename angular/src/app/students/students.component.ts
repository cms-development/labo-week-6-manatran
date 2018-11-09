import { Attributes } from './../models/lecturer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './../services/student.service';
import { Student } from '../models/student';
import { Course } from '../models/course';
import { JsonObject } from '../models/json-object';
import axios from 'axios';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public students: Student[];
  student: Student;
  courses: Course[];
  checkboxes = [];
  selectedCourses = [];

  constructor(private studentService: StudentService, private router: Router) { }

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
    } catch (error) {
      console.error(error);
    }
  }

  public async createStudent(firstname, name): Promise<void> {
    try {
      const postObj = new JsonObject();
      this.student = new Student();
      this.student.attributes = new Attributes();
      this.student.attributes.name = name.value;
      this.student.attributes.field_first_name = firstname.value;
      postObj.data = this.student;

      const res = await this.studentService.createStudent<JsonObject>(postObj);
      this.router.navigate([`students/${res.data.id}`]);
    } catch (error) {
      console.error(error);
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
