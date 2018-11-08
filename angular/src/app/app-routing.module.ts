
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CoursesComponent } from './courses/courses.component';
import { LecturersComponent } from './lecturers/lecturers.component';
import { StudentsComponent } from './students/students.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LecturerDetailComponent } from './lecturers/lecturer-detail/lecturer-detail.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  {path: 'lecturers', component: LecturersComponent, canActivate: [AuthGuard] },
  {path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
  {path: 'courses/:id', component: CourseDetailComponent, canActivate: [AuthGuard] },
  {path: 'lecturers/:id', component: LecturerDetailComponent, canActivate: [AuthGuard] },
  {path: 'students/:id', component: StudentDetailComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}
