import { Component } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';
import { BookService } from '../book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  // books: IBook[] | undefined
  // constructor(private bookService: BookService){
  //   this.getAllBooks()
  // }

  // getAllBooks(){
  //   this.books = undefined;
  //   this.bookService.getAllBooks().pipe((book) => this.books = book)
  // }

  booksList: IBook[] | null = [];
  hasBooks: boolean = false

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.booksList = books
        if (this.booksList.length > 0) {
          this.hasBooks = true;

        }
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
