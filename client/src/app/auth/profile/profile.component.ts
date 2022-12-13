import { Component } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  books: IBook[] | any = null;;
  isEmpty: boolean = false;
  constructor(private authService: AuthService) {
    this.getMyBooks()
  }
  getMyBooks() {
    this.authService.getProfileBooks().subscribe({
      next: (value) => {
        this.books = value
        if (value.length == 0) {
          this.isEmpty = true;
        }
      },
      error: (err) => console.log(err),

    })

  }

}
