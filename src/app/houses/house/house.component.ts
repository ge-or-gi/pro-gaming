import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FavoritesService} from '../../shared/services/favorites.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EntitiesTypeEnum} from '../../shared/enums/entities-types-enum';
import {House} from '../../shared/interfaces/house';
import {HousesService} from '../../shared/services/houses.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  @Input() public houseUrl: string = '';
  isFavorite: boolean = false;

  house$!: Observable<House>;

  constructor(private readonly houseSvc: HousesService,
              private readonly favoritesSvc: FavoritesService,
              @Inject(MAT_DIALOG_DATA) public url: string) { }

  ngOnInit(): void {
    if(this.houseUrl === '') this.houseUrl = this.url;
    this.house$ = this.houseSvc.getHouse(this.houseUrl);
    this.isFavorite = this.favoritesSvc.getFavoritesById(this.houseUrl);
  }

  handleFavorite(url: string, name: string) {
    this.favoritesSvc.toggleFavoritesById(url, name, EntitiesTypeEnum.HOUSE, );
    this.isFavorite = this.favoritesSvc.getFavoritesById(this.houseUrl);
  }
}
