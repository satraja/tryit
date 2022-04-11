import { ChildModule } from '../child/child.module';
import { CommonModule } from '@angular/common';
import { GrandChildComponent } from './grand-child.component';
import { GrandChildService } from './grand-child.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, ChildModule],
  declarations: [GrandChildComponent],
  exports: [GrandChildComponent],
  providers: [GrandChildService],
})
export class GrandChildModule {}
