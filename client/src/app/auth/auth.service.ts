import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBook, IUser } from '../shared/interfaces';

const apiUrl = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: null | IUser | undefined;
  token: string | null = localStorage.getItem('token')


  constructor(private http: HttpClient, private router: Router) { }
  isLogged() {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }



  register(data: {}) {
    return this.http.post<IUser>(`${apiUrl}/register`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }

  login(data: {}) {
    return this.http.post<IUser>(`${apiUrl}/login`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }
  getProfile(token: {}) {
    return this.http.post<IUser>(`${apiUrl}/profile`, token);
  }
  getProfileBooks(token: {}) {
    return this.http.post<IBook[]>(`${apiUrl}/books/mybooks`, token)
  }
  
  editUser(id: string | undefined, data: {}) {
    return this.http.put<IUser>(`${apiUrl}/profile/${id}`, data)
  }
  logout() {
    this.user = null;
    return localStorage.removeItem('token')
  }
}
