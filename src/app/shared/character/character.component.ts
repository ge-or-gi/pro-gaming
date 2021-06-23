import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from './character.service';
import {Observable} from 'rxjs';
import {Character} from './character';
import {FavoritesService} from '../services/favorites.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() characterUrl: string = '';
  isFavorite: boolean = false;

  character$!: Observable<Character>;

  constructor(private readonly characterSvc: CharacterService,
              private readonly favoritesSvc: FavoritesService) { }

  ngOnInit(): void {
    this.character$ = this.characterSvc.getCharacter(this.characterUrl);
    this.isFavorite = this.favoritesSvc.getFavoritesById(this.characterUrl);
  }

  handleFavorite(url: string) {
    this.favoritesSvc.toggleFavoritesById(url);
    this.isFavorite = this.favoritesSvc.getFavoritesById(this.characterUrl);
  }
}
