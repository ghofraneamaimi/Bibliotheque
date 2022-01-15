export class Book {
    bookId: Number;
    bookName : String;
    bookAuthor : String;
    bookEmprunte : String;
    studentId: Number;
    constructor(bookName: String, bookAuthor: String, bookEmprunte: String, studentId: Number) {
      this.bookName = bookName;
      this.bookAuthor = bookAuthor;
      this.bookEmprunte = bookEmprunte;
      this.studentId = studentId;
    }
  }
