import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/Student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  x = false;
  students: Student [] = [];
  addForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    studyField: ['', Validators.required],
    university: ['', Validators.required],
    phone: ['', Validators.required]
  });

  submitted = false;
  constructor(private studentsService: StudentsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
  }
  
  show()
  {
    this.x = true;
  }

  addStudent(): void {
    this.x = false;
    const std = new Student (this.addForm.value.firstName, this.addForm.value.lastName, this.addForm.value.age,
       this.addForm.value.studyField, this.addForm.value.university, this.addForm.value.phone,);

    this.studentsService.create(std)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  OnDelete(n: Student)
  {
    this.studentsService.delete(n.studentId);
  }
  OnUpdate(n: Student){
   this.studentsService.update(n.studentId,n);
  }

}
