import { ChildComponent } from './child.component';
import { ChildService } from './child.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [ChildComponent],
  //providers: [ChildService],
  exports: [ChildComponent],
})
export class ChildModule {}
