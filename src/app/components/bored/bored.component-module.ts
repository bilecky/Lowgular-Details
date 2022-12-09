import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoredComponent } from './bored.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [CommonModule, MatCardModule],
  declarations: [BoredComponent],
  providers: [],
  exports: [BoredComponent]
})
export class BoredComponentModule {
}
