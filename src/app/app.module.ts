import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C02GifsModule } from './c02-gifs/c02-gifs.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    C02GifsModule         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
