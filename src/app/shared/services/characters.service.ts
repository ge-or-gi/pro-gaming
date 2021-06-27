import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Character} from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private readonly httpSvc: HttpClient) { }

  getCharacters(url: string): Observable<Character[]> {
    return this.httpSvc.get<Character[]>(url);
  }
}
