import { CommonModule } from '@angular/common';
import { CorsComponent } from './cors.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CorsComponent],
  exports:[CorsComponent]
})
export class CorsModule { }
