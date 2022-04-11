import { ChildComponent } from './child/child.component';
import { ChildModule } from './child/child.module';
import { CommonModule } from '@angular/common';
import { FamilyService } from './family.service';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { GrandChildModule } from './grand-child/grand-child.module';
import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ParentModule } from './parent/parent.module';

@NgModule({
  imports: [CommonModule, ParentModule, ChildModule, GrandChildModule],
  declarations: [],
  providers: [FamilyService],
  exports: [ChildComponent, GrandChildComponent,ParentComponent],
})
export class FamilyModule {}
