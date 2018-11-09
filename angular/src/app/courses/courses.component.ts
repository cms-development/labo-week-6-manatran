import { Component, OnInit } from '@angular/core';
import { CourseService } from './../services/course.service';
import { Course } from '../models/course';
import { JsonObject } from '../models/json-object';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
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
