import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from './character.service';
import {Observable} from 'rxjs';
import {Character} from './character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() characterUrl: string = '';

  character$!: Observable<Character>;

  constructor(private readonly characterSvc: CharacterService) { }

  ngOnInit(): void {
    this.character$ = this.characterSvc.getCharacter(this.characterUrl)
  }

}
