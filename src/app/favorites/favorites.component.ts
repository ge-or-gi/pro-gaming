import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FavoritesService} from '../shared/services/favorites.service';
import {Favorites} from './favorites';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {

  favorites$: Observable<Favorites[]> = of([]);
  displayedColumns: string[] = ['name', 'url', 'type']

  constructor(
    private readonly favoritesSvc: FavoritesService
  ) { }

  ngOnInit(): void {
    this.favorites$ = of(this.favoritesSvc.getFavorites());
    // console.dir(this.favorites)
  }

  handleRowClick(row: Favorites) {
    console.dir(row);
  }
}
