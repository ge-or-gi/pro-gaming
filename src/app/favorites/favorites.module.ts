import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MatTableModule,
    MatRippleModule,
    MatDialogModule,
  ],
})
export class FavoritesModule { }
