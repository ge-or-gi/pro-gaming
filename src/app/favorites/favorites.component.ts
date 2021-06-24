import {Component, OnInit} from '@angular/core';
import {FavoritesService} from '../shared/services/favorites.service';
import {Favorites} from './favorites';
import {Observable, of} from 'rxjs';
import {BooksService} from '../shared/services/books.service';
import {EntitiesTypeEnum} from '../shared/enums/entities-types-enum';
import {take} from 'rxjs/operators';
import {DetaisComponent} from '../list/detais/detais.component';
import {MatDialog} from '@angular/material/dialog';
import {CharacterComponent} from '../shared/character/character.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {

  favorites$: Observable<Favorites[]> = of([]);
  displayedColumns: string[] = ['name', 'url', 'type']

  constructor(
    private readonly favoritesSvc: FavoritesService,
    private readonly booksSvc: BooksService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.favorites$ = of(this.favoritesSvc.getFavorites());
    // console.dir(this.favorites)
  }

  handleRowClick(row: Favorites) {
    if(row.type === EntitiesTypeEnum.BOOK) {
      this.booksSvc.getBook(row.url).pipe(
        take(1)
      ).subscribe(res => {
        const modalRef = this.dialog.open(DetaisComponent, {data: res})
      })
    }

    if(row.type === EntitiesTypeEnum.CHARACTER) {
      const modalRef = this.dialog.open(CharacterComponent, {data: row.url});
    }
  }
}
