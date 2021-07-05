import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearcService {

  private _search: BehaviorSubject<string> = new BehaviorSubject<string>('');

  searchText: Observable<string> = this._search.asObservable();

  constructor() { }

  search(text: string): void {
    this._search.next(text);
  }
}
