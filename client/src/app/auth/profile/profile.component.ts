import { Component } from '@angular/core';
import { IBook, IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: IUser | undefined;
  books: IBook[] | any = null;;
  isEmpty: boolean = false;
  constructor(private authService: AuthService) {
    this.getUserProfile()
    this.getMyBooks()
  }
  getUserProfile() {
    let token = localStorage.getItem('token');

    this.authService.getProfile({ token }).subscribe({
      next: (user) => {
        this.user = user
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  getMyBooks() {
    let token = localStorage.getItem('token');
   
    this.authService.getProfileBooks({token}).subscribe({
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
