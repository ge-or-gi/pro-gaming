import {Injectable} from '@angular/core';
import {Favorites} from '../../favorites/favorites';
import {EntitiesTypeEnum} from '../enums/entities-types-enum';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites = new Map<string, Favorites>();

  private _favoritiesList$ = new BehaviorSubject<Favorites[]>([]);
  favoritiesList$ = this._favoritiesList$.asObservable();

  constructor() { }

  getFavorites(): Observable<Favorites[]>{
    const favs: Favorites[] = [];
    this.favorites.forEach(fav => favs.push(fav))
    this._favoritiesList$.next(favs);
    return of(favs);
  }

  private addFavorites(url: string, entity: EntitiesTypeEnum, name: string): void {
    const id = this.createId(url);
    const favoritesData: Favorites = {url: url, name: name, type: entity}
    this.favorites.set(id, favoritesData);
    console.log(this.getFavorites())
  }

  private removeFavorites(url: string): void {
    const id = this.createId(url);
    this.favorites.delete(id);
    console.log(this.getFavorites())
  }

  getFavoritesById(url: string): boolean {
    const id = this.createId(url);
    return this.favorites.has(id)
  }

  toggleFavoritesById(url: string, name: string = 'undefined', entityType: EntitiesTypeEnum = EntitiesTypeEnum.UNDEFINED): void{
    if(this.getFavoritesById(url)) {
      this.removeFavorites(url);
    } else {
      this.addFavorites(url, entityType, name);
    }
  }

  private createId(url: string): string {
    const idFromUrl = new URL(url);
    return idFromUrl.pathname;
  }
}
