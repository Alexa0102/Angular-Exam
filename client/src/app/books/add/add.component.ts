import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  errors: string | undefined = undefined;
  constructor(private bookService: BookService, private router: Router) { }

  addBook(form: NgForm) {
    this.bookService.addBook(form.value).subscribe({
      next: () => this.router.navigate(['/books']),
      error: (err) => {
        this.errors = err?.error?.error
      }
    })
  }
}
