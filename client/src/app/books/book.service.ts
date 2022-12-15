import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBook } from '../shared/interfaces';
const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  addBook(data: {}){
    return this.http.post(`${apiUrl}/books`, data)
  }
  getAllBooks() {
    return this.http.get<IBook[]>(`${apiUrl}/books`)
  }
  getOneBook(_id: string,) {
    return this.http.get<IBook>(`${apiUrl}/books/${_id}`)
  }
  editBook(id: string | undefined, data: {}){
    return this.http.put<IBook>(`${apiUrl}/books/${id}`, data)
  }
  deleteBook(id: string | undefined){
    return this.http.delete(`${apiUrl}/books/${id}`)
  }
  getThreeBooks(){
    return this.http.get<IBook[]>(`${apiUrl}/books/top`)
  }
  
}
