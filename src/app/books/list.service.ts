import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private readonly http: HttpClient) { }

  getList(): Observable<Book[]>{
    return this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books/')
  }
}
