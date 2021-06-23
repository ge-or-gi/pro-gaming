import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import { DetaisComponent } from './detais/detais.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ListComponent,
    DetaisComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatRippleModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ListModule { }
