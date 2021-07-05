import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  CharactersService,
} from '../shared/services/characters.service';
import {
  Character,
} from '../shared/interfaces/character';
import {
  MatPaginator,
} from '@angular/material/paginator';
import {
  merge,
} from 'rxjs';
import {
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import {
  MatSort,
} from '@angular/material/sort';
import {
  MatDialog,
} from '@angular/material/dialog';
import {
  CharacterComponent,
} from './character/character.component';
import {
  PaginatorEnum,
} from '../shared/enums/paginator';
import {
  SearchComponent,
} from '../shared/components/search/search.component';
import {
  SearcService,
} from '../shared/components/search/searc.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {
    static: true,
  }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!: MatSort;

  PAGINATOR_ENUM = PaginatorEnum;

  isLoading: boolean = true;

  data: Character[] = [];
  displayedColumns: string[] = ['name', 'gender', 'father', 'mother'];

  constructor(private readonly charactersSvc: CharactersService,
              private readonly searSvc: SearcService,
              private readonly dialog: MatDialog) { }

  ngOnInit(): void { }

  handleRowClick(row: Character) {
    const dialogRef = this.dialog.open(CharacterComponent, {
      data: row.url,
    });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      merge(this.paginator.page, this.searSvc.searchText).pipe(
        tap(() => this.isLoading = true),
        startWith({}),
        switchMap((value, index) => {
          return this.charactersSvc.getCharacters(`https://www.anapioficeandfire.com/api/characters?search=${value}&page=${1 +
           (this.paginator?.pageIndex ?? 0)}&pageSize=${this.paginator?.pageSize ?? this.PAGINATOR_ENUM.ITEMS_PER_PAGE}`);
        }),
      ).subscribe((res: Character[]) => {
        this.data = res;
        this.isLoading = false;
      });
    }
  }
}
