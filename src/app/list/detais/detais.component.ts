import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Book} from '../book';

@Component({
  selector: 'app-detais',
  templateUrl: './detais.component.html',
  styleUrls: ['./detais.component.scss']
})
export class DetaisComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public book: Book) { }

  ngOnInit(): void {
  }

}
