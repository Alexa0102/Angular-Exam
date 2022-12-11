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
  token: string | null = localStorage.getItem('token')
  isAuthor: boolean = false;
  errors: Object | undefined
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.getBook()
  }

  getBook(): void {
    this.book = undefined;
    const id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getOneBook(id).subscribe({
      next: (book) => {
        this.book = book
        if(this.authService.user?._id == book.owner._id){
          console.log(this.authService.user)
          this.isAuthor = true
        }else {
          this.isAuthor = false;
        }
      },
      error: (err) => {
        this.errors = err.error?.error
        this.router.navigate(['/'])
      }
    })
  }
  editBook(form: NgForm) {
    if(this.authService.user?._id != this.book?.owner._id || !this.token){
      this.router.navigate(['/'])
    }
    const id = this.book?._id;
    this.bookService.editBook(id, form.value).subscribe({
      next: (book) => {
        this.book = book
        this.inEditMode = false;
      },
      error: (err) => {
        this.errors = err.error?.error
      }
    })
  }
  delete(){
    if(this.authService.user?._id != this.book?.owner._id || !this.token){
      console.log(this.authService.user)
      this.router.navigate(['/'])
    }
    const id = this.book?._id;
    this.bookService.deleteBook(id).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errors = err.error?.error
      }
    })
  }
}
