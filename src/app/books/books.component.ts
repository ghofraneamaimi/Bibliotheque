import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BooksService } from '../services/books.service';
import { Book } from '../models/Book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  x = false;
  books: Book [] = [];
  addForm: FormGroup = this.fb.group({
    bookName: ['', Validators.required],
    bookAuthor: ['', Validators.required],
    bookEmprunte: ['', Validators.required],
    studentId: ['', Validators.required]
  });

  submitted = false;
  constructor(private booksService: BooksService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
  
  show()
  {
    this.x = true;
  }

  addBook(): void {
    this.x = false;
    const book = new Book (this.addForm.value.title, this.addForm.value.idStudent, this.addForm.value.author,
       this.addForm.value.description);

    this.booksService.create(book)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  OnDelete(n: Book)
  {
    this.booksService.delete(n.bookId);
  }
  OnUpdate(n: Book){
   this.booksService.update(n.bookId,n);
  }

}
