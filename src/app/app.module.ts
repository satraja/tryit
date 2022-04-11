import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ComponentsModule } from './components/components.module';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ComponentsModule, PageNotFoundModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
