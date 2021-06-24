import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../list/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private readonly httpSvc: HttpClient
  ) { }

  getBook(url: string): Observable<Book> {
    return this.httpSvc.get<Book>(url);
  }
}
