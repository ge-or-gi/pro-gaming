import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../shared/interfaces/book';
import {MatDialog} from '@angular/material/dialog';
import {DetaisComponent} from './detais/detais.component';
import {BooksService} from '../shared/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  data$: Observable<Book[]> = this.booksSvc.getBooks('https://www.anapioficeandfire.com/api/books?page=1&pageSize=50');
  displayedColumns: string[] = ['name', 'authors', 'country', 'publisher'];

  constructor(private readonly booksSvc: BooksService, private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleRowClick(book: Book) {
    console.dir(book);

    this.dialog.open(DetaisComponent, {data: book});
  }
}
