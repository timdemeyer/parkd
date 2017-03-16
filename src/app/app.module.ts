import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent }  from './app.component';
import { GoogleMapsComponent } from './google-maps.component';
import { GemeenteFilterPipe } from './gemeente-filter-pipe';
import { PostcodeFilterPipe } from './postcode-filter-pipe';

// imports: [] => makes these services accesabble from anywhere in the application
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZrflEA4Fus99PtQe8GJszFXFczhKIHqE'
    })
  ],
  providers: [],
  declarations: [ AppComponent, GoogleMapsComponent, GemeenteFilterPipe, PostcodeFilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}