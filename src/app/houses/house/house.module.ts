import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HouseComponent} from './house.component';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CharacterModule} from '../../shared/character/character.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HouseComponent,
  ],
  exports: [
    HouseComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    CharacterModule,
    MatDialogModule,
  ],
})
export class HouseModule {}
