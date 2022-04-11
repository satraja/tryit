import { CorsComponent } from './components/cors/cors.component';
import { HttpHandlerComponent } from './components/http-handler/http-handler.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RelativesComponent } from './components/relatives/relatives.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"httphandler",
    component:HttpHandlerComponent
  },
  //TODO: lazy load with famlly routing
  // {
  //   path:"family",
  //   component:HttpHandlerComponent
  // },
  {
    path:"relatives", // TODO routing for relatives component
    component:RelativesComponent
  },
  {
    path:"cors",
    component:CorsComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  },
  


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
