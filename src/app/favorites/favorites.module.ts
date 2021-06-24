import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MatTableModule,
    MatRippleModule,
  ],
})
export class FavoritesModule { }
