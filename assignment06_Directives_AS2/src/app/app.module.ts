import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BookRideFilterComponent } from './components/book-ride-filter/book-ride-filter.component'
import { RideTableComponent } from './components/ride-table/ride-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RideTableComponent,
    BookRideFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
