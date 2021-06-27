import {Component, OnInit} from '@angular/core';
import {CharactersService} from '../shared/services/characters.service';
import {Character} from '../shared/interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  data$ = this.charactersSvc.getCharacters('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=100');
  displayedColumns: string[] = ['name', 'gender', 'father', 'mother']

  constructor(private readonly charactersSvc: CharactersService) { }

  ngOnInit(): void {
  }

  handleRowClick(row: Character) {
    console.log(row)
  }
}
