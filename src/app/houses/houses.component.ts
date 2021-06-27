import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HousesService} from '../shared/services/houses.service';
import {House} from '../shared/interfaces/house';
import {MatDialog} from '@angular/material/dialog';
import {HouseComponent} from './house/house.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  data: House[] = [];
  displayedColumns: string[] = ['name', 'region', 'words', 'coatOfArms'];

  constructor(private readonly houseSvc: HousesService,
              private readonly dialog: MatDialog) { }

  ngAfterViewInit(): void {
    merge(this.paginator.page, this.sort.sortChange).pipe(
      startWith({}),
      switchMap(() => {
        return this.houseSvc.getHouses(`https://www.anapioficeandfire.com/api/houses?page=
        ${this.paginator.pageIndex+1}&pageSize=${this.paginator.pageSize}`);
      }),
    ).subscribe((res: House[]) => this.data = res)
  }

  ngOnInit(): void {
  }

  handleRowClick(row: House) {
    console.log(row);
    this.dialog.open(HouseComponent, {data: row.url});
  }
}
