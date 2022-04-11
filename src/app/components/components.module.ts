import { ChildComponent } from './family/child/child.component';
import { CommonModule } from '@angular/common';
import { CorsComponent } from './cors/cors.component';
import { CorsModule } from './cors/cors.module';
import { FamilyModule } from './family/family.module';
import { GrandChildComponent } from './family/grand-child/grand-child.component';
import { HttpHandlerComponent } from './http-handler/http-handler.component';
import { HttpHandlerModule } from './http-handler/http-handler.module';
import { NeighbourComponent } from './neighbour/neighbour.component';
import { NeighbourModule } from './neighbour/neighbour.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ParentComponent } from './family/parent/parent.component';
import { RelativesComponent } from './relatives/relatives.component';
import { RelativesModule } from './relatives/relatives.module';

@NgModule({
  imports: [
    CommonModule,
    FamilyModule,
    NeighbourModule,
    RelativesModule,
    CorsModule,
    HttpHandlerModule,
    PageNotFoundModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    NeighbourComponent,
    RelativesComponent,
    CorsComponent,
    HttpHandlerComponent,
    PageNotFoundComponent
  ],
})
export class ComponentsModule {}
