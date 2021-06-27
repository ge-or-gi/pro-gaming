import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../interfaces/house';

@Injectable({
  providedIn: 'root',
})
export class HousesService {

  constructor(
    private readonly httpSvc: HttpClient,
  ) { }

  getHouses(url: string): Observable<House[]> {
    return this.httpSvc.get<House[]>(url);
  }

  getHouse(url:  string): Observable<House> {
    return this.httpSvc.get<House>(url);
  }
}
