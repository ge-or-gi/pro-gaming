import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    HousesComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    MatTableModule,
    MatRippleModule,
  ],
})
export class HousesModule { }
