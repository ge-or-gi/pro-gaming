import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HousesService} from '../shared/services/houses.service';
import {House} from '../shared/interfaces/house';
import {MatDialog} from '@angular/material/dialog';
import {HouseComponent} from './house/house.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge} from 'rxjs';
import {startWith, switchMap, tap} from 'rxjs/operators';
import {PaginatorEnum} from '../shared/enums/paginator';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading = true;

  data: House[] = [];
  displayedColumns: string[] = ['name', 'region', 'words', 'coatOfArms'];
  PAGINATOR_ENUM = PaginatorEnum;

  constructor(private readonly houseSvc: HousesService,
              private readonly dialog: MatDialog) { }

  ngAfterViewInit(): void {
    if (this.paginator) {
      merge(this.paginator.page, this.sort.sortChange).pipe(
        tap(() => this.isLoading = true),
        startWith({}),
        switchMap(() => {
          return this.houseSvc.getHouses(`https://www.anapioficeandfire.com/api/houses?page=
          ${(this.paginator?.pageIndex ?? 0) + 1}&pageSize=${this.paginator?.pageSize ?? 0}`);
        }),
      ).subscribe((res: House[]) => {
        this.isLoading = false;
        this.data = res;
      });
    }
  }

  ngOnInit(): void {
  }

  handleRowClick(row: House) {
    console.log(row);
    this.dialog.open(HouseComponent, {data: row.url});
  }
}
