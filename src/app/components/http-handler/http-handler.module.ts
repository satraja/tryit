import { CommonModule } from '@angular/common';
import { HttpHandlerComponent } from './http-handler.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HttpHandlerComponent],
  exports:[HttpHandlerComponent]
})
export class HttpHandlerModule { }
