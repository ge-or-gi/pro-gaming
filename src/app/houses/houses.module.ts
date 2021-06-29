import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {HouseModule} from './house/house.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {IsLoadingModule} from '../shared/is-loading/is-loading.module';


@NgModule({
  declarations: [
    HousesComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    MatTableModule,
    MatRippleModule,
    MatDialogModule,
    HouseModule,
    MatPaginatorModule,
    MatSortModule,
    IsLoadingModule,
  ],
})
export class HousesModule { }
