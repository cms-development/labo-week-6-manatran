import { Component, OnInit } from '@angular/core';
import { LecturerService } from './../services/lecturer.service';
import { Lecturer } from '../models/lecturer';
import { JsonObject } from '../models/json-object';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  public lecturers: Lecturer[];

  constructor(private lecturerService: LecturerService) { }

  ngOnInit() {
    this.getLecturers();
  }

  public async getLecturers(): Promise<void> {
    try {
      const res = await this.lecturerService.getLecturers<JsonObject>();
      this.lecturers = res.data;
      console.log(this.lecturers);
    } catch (error) {
      console.error(error);
    }
  }
}
