import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student} from '../models/Student'

const baseUrl = 'http://localhost:9191/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
   myStudents : Student [] = [];
  constructor(private http: HttpClient) { }

 // getAll(): Observable<Student[]> {
  //  return this.http.get<Student[]>(baseUrl);
  //} 
  getStudents() {
    this.myStudents = [];
    this.http
      .get<any>(baseUrl)
      .subscribe((data) => {
        data.map(dt => {
          this.myStudents.push(dt);
        });
      });
    return this.myStudents;
  }


  get(id): Observable<Student> {
    return this.http.get<Student>(`${baseUrl}/${id}`);
  }

  create(data): Observable<Student> {
    return this.http.post<Student>(baseUrl, data);
  }

  update(id, data): Observable<Student> {
    return this.http.put<Student>(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<Student> {
    return this.http.delete<Student>(`${baseUrl}/${id}`);
  }

  findByName(name): Observable<Student> {
    return this.http.get<Student>(`${baseUrl}?title=${name}`);
  }
}