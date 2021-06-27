import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from '../../shared/interfaces/character';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private readonly http: HttpClient) { }

  getCharacter(characterUrl: string): Observable<Character>{
    return this.http.get<Character>(characterUrl)
  }
}
