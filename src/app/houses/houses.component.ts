import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../list/book';
import {HousesService} from '../shared/services/houses.service';
import {House} from '../shared/interfaces/house';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  data$: Observable<House[]> = this.houseSvc.getHouses('https://www.anapioficeandfire.com/api/houses/');
  displayedColumns: string[] = ['name', 'region', 'words', 'coatOfArms']


  constructor(private readonly houseSvc: HousesService) { }

  ngOnInit(): void {
  }

  handleRowClick(row: House) {
    console.log(row)
  }
}
