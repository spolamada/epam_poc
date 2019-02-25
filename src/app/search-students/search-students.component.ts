import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {

  age: number;
  students: Student[];

  constructor(private dataService: StudentService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchStudents() {
    this.dataService.getStudentsByAge(this.age)
      .subscribe(students => this.students = students);
  }

  onSubmit() {
    this.searchStudents();
  }
}
