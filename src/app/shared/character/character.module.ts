import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import {MatRippleModule} from '@angular/material/core';



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
  ],
})
export class CharacterModule { }
