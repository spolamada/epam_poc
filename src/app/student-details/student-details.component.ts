import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student: Student;

  constructor(private studentService: StudentService, private listComponent: StudentsListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.studentService.updateStudent(this.student.id,
      { name: this.student.name, age: this.student.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.student = data as Student;
        },
        error => console.log(error));
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.student.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
