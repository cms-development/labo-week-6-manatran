import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { LecturersComponent } from './lecturers/lecturers.component';

const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'lecturers', component: LecturersComponent},
  {path: 'courses', component: CoursesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}
