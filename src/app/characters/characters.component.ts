import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CharactersService} from '../shared/services/characters.service';
import {Character} from '../shared/interfaces/character';
import {MatPaginator} from '@angular/material/paginator';
import {merge} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {CharacterComponent} from '../shared/character/character.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  data: Character[] = [];
  displayedColumns: string[] = ['name', 'gender', 'father', 'mother']

  constructor(private readonly charactersSvc: CharactersService,
              private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleRowClick(row: Character) {
    console.log(row)
    const dialogRef =  this.dialog.open(CharacterComponent, {data: row.url})
  }

  ngAfterViewInit(): void {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return this.charactersSvc.getCharacters(`https://www.anapioficeandfire.com/api/characters?page=${this.paginator.pageIndex+1}&pageSize=${this.paginator.pageSize}`)
      })
    ).subscribe((res: Character[]) => this.data = res)
  }
}
