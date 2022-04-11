import { CommonModule } from '@angular/common';
import { NeighbourComponent } from './neighbour.component';
import { NeighbourService } from './neighbour.service';
import { NgModule } from '@angular/core';
import { RelativesModule } from '../relatives/relatives.module';

@NgModule({
  imports: [CommonModule],
  declarations: [NeighbourComponent],
  exports: [NeighbourComponent],
  providers: [NeighbourService],
})
export class NeighbourModule {}
