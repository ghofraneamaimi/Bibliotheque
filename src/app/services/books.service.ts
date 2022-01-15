import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book}  from '../models/Book';

const baseUrl = 'http://localhost:9191/books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {  
  myBooks : Book[] = [];
  constructor(private http: HttpClient) { }

  getBooks() {
    this.myBooks = [];
    this.http
      .get<any>(baseUrl)
      .subscribe((data) => {
        data.map(dt => {
          this.myBooks.push(dt);
        });
      });
    return this.myBooks;
  }

  get(id): Observable<Book> {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  create(data): Observable<Book> {
    return this.http.post<any>(baseUrl, data);
  }

  update(id, data): Observable<Book> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<Book> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }

  findByTitle(title): Observable<Book> {
    return this.http.get<any>(`${baseUrl}?title=${title}`);
  }
}