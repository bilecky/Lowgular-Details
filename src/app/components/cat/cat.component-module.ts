import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CatComponent } from './cat.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CatComponent],
  providers: [],
  exports: [CatComponent]
})
export class CatComponentModule {
}
