import { Component, OnInit } from '@angular/core';
import { OverviewService } from './../services/overview.service';
import { Course } from '../models/course';
import { Lecturer } from '../models/lecturer';
import { Student } from '../models/student';
import { JsonObject } from '../models/json-object';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public courses: Course[];
  public lecturers: Lecturer[];
  public students: Student[];

  constructor(private overviewService: OverviewService) { }

  ngOnInit() {
    this.getCourses();
    this.getLecturers();
    this.getStudents();
  }

  public async getCourses(): Promise<void> {
    try {
      const res = await this.overviewService.getCourses<JsonObject>();
      this.courses = res.data;
      console.log(this.courses);
    } catch ( error ) {
      console.error( error );
    }
  }

  public async getLecturers(): Promise<void> {
    try {
      const res = await this.overviewService.getLecturers<JsonObject>();
      this.lecturers = res.data;
      console.log(this.lecturers);
    } catch ( error ) {
      console.error( error );
    }
  }

  public async getStudents(): Promise<void> {
    try {
      const res = await this.overviewService.getStudents<JsonObject>();
      this.students = res.data;
      console.log(this.students);
    } catch ( error ) {
      console.error( error );
    }
  }

}
