import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RideDetailsComponentComponent } from './components/ride-details-component/ride-details-component.component';
import { BookRideComponentComponent } from './components/book-ride-component/book-ride-component.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RideDetailsComponentComponent,
    BookRideComponentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
