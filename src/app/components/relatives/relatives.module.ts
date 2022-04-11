import { AuntyComponent } from './aunty/aunty.component';
import { CommonModule } from '@angular/common';
import { CousinComponent } from './cousin/cousin.component';
import { NgModule } from '@angular/core';
import { RelativesComponent } from './relatives.component';
import { UncleComponent } from './uncle/uncle.component';
import { UncleService } from './uncle/uncle.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AuntyComponent,
    UncleComponent,
    CousinComponent,
    RelativesComponent,
  ],
  providers:[],
  exports: [RelativesComponent],
})
export class RelativesModule {}
