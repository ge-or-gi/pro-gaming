import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



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
    MatButtonModule,
  ],
})
export class CharacterModule { }
