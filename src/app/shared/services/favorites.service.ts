import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites = new Set<string>();

  constructor() { }

  getFavorites() {
    return this.favorites
  }

  addFavorites(url: string): void {
    const id = this.createId(url);
    this.favorites.add(id);
    console.log(this.getFavorites())
  }

  removeFavorites(url: string): void {
    const id = this.createId(url);
    this.favorites.delete(id);
    console.log(this.getFavorites())
  }

  getFavoritesById(url: string): boolean {
    const id = this.createId(url);
    return this.favorites.has(id)
  }

  toggleFavoritesById(url: string): void{
    if(this.getFavoritesById(url)) {
      this.removeFavorites(url);
    } else {
      this.addFavorites(url);
    }
  }

  private createId(url: string): string {
    const idFromUrl = new URL(url);
    return idFromUrl.pathname;
  }
}
