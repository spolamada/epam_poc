import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { SearchStudentsComponent } from './search-students/search-students.component';

const routes: Routes = [
    { path: '', redirectTo: 'student', pathMatch: 'full' },
    { path: 'student', component: StudentsListComponent },
    { path: 'add', component: CreateStudentComponent },
    { path: 'findbyId', component: SearchStudentsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
