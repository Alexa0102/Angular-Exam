import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IBook, IUser } from 'src/app/shared/interfaces';
import { appEmailValidator, passwordValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  form!: FormGroup;
  user: IUser | undefined;
  books: IBook[] | any = null;;
  inEditMode: boolean = false;
  isEmpty: boolean = false;
  errors: string | undefined = undefined;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.getUserProfile()
    this.getMyBooks()
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, appEmailValidator]],
      password: ['', [Validators.required, passwordValidator]],
    });
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

    this.authService.getProfileBooks({ token }).subscribe({
      next: (value) => {
        this.books = value
        if (value.length == 0) {
          this.isEmpty = true;
        }
      },
      error: (err) => console.log(err),

    })

  }
  onEditUser() {

    const id = this.user?._id;

    let token = localStorage.getItem('token');
    let value = this.form.value;
    value.token = token;

    this.authService.editUser(id, value).subscribe({
      next: (user) => {
        this.user = user;
        this.inEditMode = false;
      },
      error: (err) => {
        this.errors = err.error.error
      }
    })

  }

}
