import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParentComponent } from './parent.component';
import { ParentService } from './parent.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentComponent],
  providers: [ParentService],
  exports: [ParentComponent],
})
export class ParentModule {}
