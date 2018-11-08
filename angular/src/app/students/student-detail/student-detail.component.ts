import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../../services/student.service';
import { Student } from './../../models/student';
import { Course } from './../../models/course';
import { JsonObject } from './../../models/json-object';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public student: Student;
  public courses: Course[];

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getStudent();
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

}
