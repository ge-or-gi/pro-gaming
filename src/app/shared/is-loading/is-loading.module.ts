import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingComponent } from './is-loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    IsLoadingComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    IsLoadingComponent,
  ],
})
export class IsLoadingModule { }
