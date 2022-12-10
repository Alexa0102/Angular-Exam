import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBook } from 'src/app/shared/interfaces';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  book: IBook | undefined;
  inEditMode: boolean = false;
  get isAuthor(): boolean{
    if(this.book?.owner == this.authService.user?.username){
      return true
    }else {
      return false;
    }
  }
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.getBook()
  }

  getBook(): void {
    this.book = undefined;
    const id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getOneBook(id).subscribe(book => this.book = book)
  }
  editBook(form: NgForm) {
    const id = this.book?._id;
    this.bookService.editBook(id, form.value).subscribe({
      next: (book) => {
        this.book = book
        this.inEditMode = false;
      },
      error: (err) => console.log(err)
    })
  }
  delete(){
    const id = this.book?._id;
    this.bookService.deleteBook(id).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.log(err)
    })
  }
}
