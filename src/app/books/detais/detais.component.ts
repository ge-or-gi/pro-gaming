import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Book} from '../../shared/interfaces/book';
import {FavoritesService} from '../../shared/services/favorites.service';
import {EntitiesTypeEnum} from '../../shared/enums/entities-types-enum';

@Component({
  selector: 'app-detais',
  templateUrl: './detais.component.html',
  styleUrls: ['./detais.component.scss'],
})
export class DetaisComponent implements OnInit {

  isFavorites: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public book: Book,
              private readonly favoritesSvc: FavoritesService) { }

  ngOnInit(): void {
    this.isFavorites = this.favoritesSvc.getFavoritesById(this.book.url)
  }

  handleFavorites(url: string, name: string) {
    if(this.favoritesSvc.getFavoritesById(url)) {
      this.isFavorites = false;
      this.favoritesSvc.toggleFavoritesById(url);
    } else {
      this.isFavorites = true;
      this.favoritesSvc.toggleFavoritesById(url, name, EntitiesTypeEnum.BOOK);
    }
  }
}
