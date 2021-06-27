import {Component, Inject, Input, OnInit} from '@angular/core';
import {CharacterService} from './character.service';
import {Observable} from 'rxjs';
import {Character} from '../interfaces/character';
import {FavoritesService} from '../services/favorites.service';
import {EntitiesTypeEnum} from '../enums/entities-types-enum';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Book} from '../interfaces/book';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() public characterUrl: string = '';
  isFavorite: boolean = false;

  character$!: Observable<Character>;

  constructor(private readonly characterSvc: CharacterService,
              private readonly favoritesSvc: FavoritesService,
              @Inject(MAT_DIALOG_DATA) public url: string) { }

  ngOnInit(): void {
    if(this.characterUrl === '') this.characterUrl = this.url;
    this.character$ = this.characterSvc.getCharacter(this.characterUrl);
    this.isFavorite = this.favoritesSvc.getFavoritesById(this.characterUrl);
  }

  handleFavorite(url: string, name: string) {
    this.favoritesSvc.toggleFavoritesById(url, name, EntitiesTypeEnum.CHARACTER, );
    this.isFavorite = this.favoritesSvc.getFavoritesById(this.characterUrl);
  }
}
