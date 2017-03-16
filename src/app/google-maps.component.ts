import { Component, Input } from '@angular/core';

@Component({
  selector: 'google-maps',
  templateUrl: '../google-maps-template.html'
})

export class GoogleMapsComponent{

	@Input('wifiPoints') wifiPoints: any;

    // inital map values
  	centerMapLat: number = 51.2193871;
  	centerMapLng: number = 4.4154059;
    zoom: number =11;
} 