import { Component, OnInit } from '@angular/core';
import { StudentService } from './../services/student.service';
import { Student } from '../models/student';
import { JsonObject } from '../models/json-object';

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

}
