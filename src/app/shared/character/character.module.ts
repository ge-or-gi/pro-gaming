import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    CharacterComponent,
  ],
  exports: [
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatIconModule,
  ],
})
export class CharacterModule { }
