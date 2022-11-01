import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFromComponent } from './students/components/shared-components/student-form-component/student-form.component';
import { AddStudentComponent } from './students/components/addStudent/add-student.component';
import { EditStudentComponent } from './students/components/editStudent/edit-student.component';

import { CourseFormComponent } from './courses/shared-components/course-form-component/course-form.component';
import { AddCourseComponent } from './courses/components/addCourse/add-course.component';
import { EditCourseComponent } from './courses/components/editCourse/edit-course.component';

import { StudentListComponent } from './students/components/student-list/student-list.component';
import { CourseListComponent } from './courses/components/course-list/course-list.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentFromComponent,
    AddStudentComponent,
    EditStudentComponent,
    CourseFormComponent,
    AddCourseComponent,
    EditCourseComponent,
    StudentListComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
