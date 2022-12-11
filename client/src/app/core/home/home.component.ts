import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { BookService } from 'src/app/books/book.service';
import { IBook } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  books: IBook[] | undefined
  get isLogged() {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }
  constructor(private authService: AuthService, private bookService: BookService) {
    this.getThreeBooks()
  }
  getThreeBooks() {
    this.bookService.getThreeBooks().subscribe({
      next: (value) => this.books = value,
      error: (err) => console.log(err)
    })
  }
}
