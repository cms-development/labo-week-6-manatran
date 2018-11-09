import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../../services/student.service';
import { CourseService } from './../../services/course.service';
import { Student, Attributes } from './../../models/student';
import { Course } from './../../models/course';
import { JsonObject } from './../../models/json-object';
import axios from 'axios';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public student: Student;
  public courses: Course[];

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getStudent();
    this.getCourses();

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

  public async getStudent(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const res = await this.studentService.getStudent<JsonObject>(id);
      this.student = res.data;
      res.included ? this.courses = res.included : console.log('No courses found');
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  public async updateStudent(firstname, name): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const patchObj = new JsonObject();
      this.student = new Student();
      this.student.attributes = new Attributes();
      this.student.attributes.field_first_name = firstname.value;
      this.student.attributes.name = name.value;
      patchObj.data = this.student;

      const res = await this.studentService.updateStudent<JsonObject>(id, patchObj);
      this.student = res.data;
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  public async getCourses(): Promise<void> {
    try {
      const res = await this.courseService.getCourses<JsonObject>();
      this.courses = res.data;
      console.log(this.courses);
    } catch (error) {
      console.error(error);
    }
  }

}
