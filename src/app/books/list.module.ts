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
import {CharacterModule} from '../characters/character/character.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {IsLoadingModule} from '../shared/is-loading/is-loading.module';


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
    CharacterModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    IsLoadingModule,
  ],
})
export class ListModule { }
