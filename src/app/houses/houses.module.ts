import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {HouseModule} from './house/house.module';
import {MatDialogModule} from '@angular/material/dialog';


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
  ],
})
export class HousesModule { }
