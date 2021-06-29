import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../interfaces/book';
import {shareReplay} from 'rxjs/operators';

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

  getBooks(url: string): Observable<Book[]>{
    return this.httpSvc.get<Book[]>(url).pipe(
      shareReplay(1)
    )
  }
}
