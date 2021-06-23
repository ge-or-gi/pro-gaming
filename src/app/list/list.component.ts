import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';
import {Observable} from 'rxjs';
import {Book} from './book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  data$: Observable<Book[]> = this.listSvc.getList();
  displayedColumns: string[] = ['name', 'authors', 'country', 'publisher']

  constructor(private readonly listSvc: ListService) { }

  ngOnInit(): void {
  }

  handleRowClick(book: Book) {
    console.dir(book)
  }
}
