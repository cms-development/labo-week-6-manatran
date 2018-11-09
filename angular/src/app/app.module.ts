import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { LecturersComponent } from './lecturers/lecturers.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LecturerDetailComponent } from './lecturers/lecturer-detail/lecturer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    LecturersComponent,
    OverviewComponent,
    LoginComponent,
    StudentDetailComponent,
    CourseDetailComponent,
    LecturerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
