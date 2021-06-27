import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../shared/interfaces/book';
import {HousesService} from '../shared/services/houses.service';
import {House} from '../shared/interfaces/house';
import {DetaisComponent} from '../books/detais/detais.component';
import {MatDialog} from '@angular/material/dialog';
import {HouseComponent} from './house/house.component';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  data$: Observable<House[]> = this.houseSvc.getHouses('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=100');
  displayedColumns: string[] = ['name', 'region', 'words', 'coatOfArms']


  constructor(private readonly houseSvc: HousesService,
              private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleRowClick(row: House) {
    console.log(row)
    const modalRef = this.dialog.open(HouseComponent, {data: row.url})
  }
}
